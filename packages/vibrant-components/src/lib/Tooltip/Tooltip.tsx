import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, PressableBox, getWindowDimensions, useCurrentTheme, useScroll } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import type { Position, Rect } from '@vibrant-ui/utils';
import { detectOverflow, flipPosition, getElementRect, getOffsetByPosition } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { HStack } from '../HStack';
import { withTooltipVariation } from './TooltipProps';

const getOffsetAvoidingOverflowByPosition = (
  openerRect: Rect,
  targetRect: Rect,
  position: Position,
  spacing?: number
) => {
  const { x, y } = getOffsetByPosition({
    referenceRect: openerRect,
    targetRect,
    position,
    spacing,
  });

  const viewport = getWindowDimensions();

  const isOverflowing = detectOverflow({
    viewport,
    targetRect: { ...targetRect, x: openerRect.x + x, y: openerRect.y + y },
  });

  if (!isOverflowing) {
    return {
      x: x + openerRect.x,
      y: y + openerRect.y,
    };
  }

  const { x: flippedX, y: flippedY } = getOffsetByPosition({
    referenceRect: openerRect,
    targetRect,
    position: flipPosition(position),
    spacing,
  });

  if (
    !detectOverflow({
      viewport,
      targetRect: {
        ...targetRect,
        x: openerRect.x + flippedX,
        y: openerRect.y + flippedY,
      },
    })
  ) {
    return {
      x: openerRect.x + flippedX,
      y: openerRect.y + flippedY,
    };
  }

  if (position.includes('top') || position.includes('bottom')) {
    let overflowLeft = false;
    let overflowRight = false;

    if (x + openerRect.x < 0) {
      overflowLeft = true;
    }

    if (x + openerRect.x + targetRect.width > viewport.width) {
      overflowRight = true;
    }

    return { y: y + openerRect.y, left: overflowLeft ? 0 : undefined, right: overflowRight ? 0 : undefined };
  }

  return { x: x + openerRect.x, y: y + openerRect.y };
};

export const Tooltip = withTooltipVariation(
  ({
    children,
    content,
    enterDelay = 100,
    leaveDelay = 0,
    maxWidth = 320,
    onClose,
    onOpen,
    spacing = 8,
    position = 'top',
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [offSet, setOffset] = useState<{
      x?: number;
      y?: number;
      left?: number;
      right?: number;
    }>({ x: 0, y: 0 });
    const openerRef = useRef<HTMLElement>(null);
    const targetRef = useRef<HTMLElement>();
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const {
      theme: { zIndex },
    } = useCurrentTheme();
    const prevScrollPosition = useRef(0);
    const { addEventListener } = useScroll();

    const handleTooltipPosition = useCallback(async () => {

      const openerRect = await getElementRect(openerRef.current);

      const targetRect: Rect = await getElementRect(targetRef.current);

      const {
        x,
        y,
        left: leftOffset,
        right: rightOffset,
      } = getOffsetAvoidingOverflowByPosition(openerRect, targetRect, position, spacing);

      setOffset({ x, y, left: leftOffset, right: rightOffset });

      setIsMounted(true);
    }, [position, spacing]);

    const openTooltip = () => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {

        setIsOpen(true);

        onOpen?.();
      }, enterDelay);
    };

    const closeTooltip = useCallback(() => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setIsMounted(false);

        onClose?.();
      }, leaveDelay);
    }, [leaveDelay, onClose]);

    useEffect(() => {
      const cleanEventListener = addEventListener(({ scrollPosition }) => {
        if (prevScrollPosition.current !== scrollPosition) {
          closeTooltip();
        }

        prevScrollPosition.current = scrollPosition;
      });

      return cleanEventListener;
    }, [addEventListener, closeTooltip, prevScrollPosition]);

    const handleTargetRect = useCallback(
      (ref?: HTMLElement) => {
        targetRef.current = ref;

        handleTooltipPosition();
      },
      [handleTooltipPosition]
    );

    return (
      <HStack>
        <PressableBox ref={openerRef} onHoverIn={openTooltip} onHoverOut={closeTooltip}>
          {children}
        </PressableBox>

        {isOpen && (
          <Transition
            ref={handleTargetRect}
            duration={200}
            easing="easeOutQuad"
            animation={{
              opacity: isMounted ? 1 : 0,
            }}
            onEnd={
              !isMounted
                ? () => {
                    setIsOpen(false);

                    setOffset({ x: 0, y: 0 });
                  }
                : undefined
            }
          >
            <Box
              maxWidth={maxWidth}
              position="fixed"
              py={6}
              px={8}
              zIndex={zIndex.dropdown}
              top={offSet.y}
              left={offSet.left ?? offSet.x}
              right={offSet.right}
              borderRadius={3}
              backgroundColor="inverseSurface"
              flexShrink={0}
            >
              {typeof content === 'string' ? (
                <Body level={4} color="onInverseSurface">
                  {content}
                </Body>
              ) : (
                content
              )}
            </Box>
          </Transition>
        )}
      </HStack>
    );
  }
);
