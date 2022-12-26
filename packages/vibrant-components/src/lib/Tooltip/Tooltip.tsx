import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Box,
  PressableBox,
  getWindowDimensions,
  useCurrentTheme,
  useResponsiveValue,
  useScroll,
} from '@vibrant-ui/core';
import { MountMotion, Transition } from '@vibrant-ui/motion';
import type { LayoutEvent, Position, Rect } from '@vibrant-ui/utils';
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

  if (position.includes('left') || position.includes('right')) {
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
          x: flippedX,
          y: flippedY,
        },
      })
    ) {
      return {
        x: openerRect.x + flippedX,
        y: openerRect.y + flippedY,
      };
    }
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
    }>({});
    const openerRef = useRef<HTMLElement>(null);
    const {
      theme: { zIndex },
    } = useCurrentTheme();
    const { breakpointIndex } = useResponsiveValue({ useRootBreakPoints: true });
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const { addEventListener } = useScroll();
    const isMobile = breakpointIndex === 0;

    const handleTooltipPosition = useCallback(
      async ({ width, height, top, left }: LayoutEvent) => {
        const openerRect = await getElementRect(openerRef.current);

        const targetRect: Rect = { x: left, y: top, width, height };

        const {
          x,
          y,
          left: leftOffset,
          right: rightOffset,
        } = getOffsetAvoidingOverflowByPosition(openerRect, targetRect, position, spacing);

        setOffset({ x, y, left: leftOffset, right: rightOffset });

        setTimeout(() => {
          setIsMounted(true);
        }, enterDelay);
      },
      [enterDelay, position, spacing]
    );
    const openTooltip = () => {
      setTimeout(() => {
        setIsOpen(true);

        onOpen?.();
      }, enterDelay);
    };

    const closeTooltip = useCallback(() => {
      setTimeout(() => {
        setIsMounted(false);

        onClose?.();
      }, leaveDelay);
    }, [leaveDelay, onClose]);

    useEffect(() => {
      const cleanEventListener = addEventListener(({ scrollPosition }) => {
        if (prevScrollPosition !== scrollPosition) {
          closeTooltip();
        }

        setPrevScrollPosition(scrollPosition);
      });

      return cleanEventListener;
    }, [addEventListener, closeTooltip, prevScrollPosition]);

    return (
      <HStack>
        <PressableBox
          ref={openerRef}
          onHoverIn={isMobile ? undefined : openTooltip}
          onHoverOut={isMobile ? undefined : closeTooltip}
        >
          {children}
        </PressableBox>

        <MountMotion mount={isOpen}>
          <Transition
            duration={200}
            easing="easeOutQuad"
            animation={{
              opacity: isMounted ? 1 : 0,
            }}
            onEnd={
              !isMounted
                ? () => {
                    setIsOpen(false);

                    setOffset({});
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
              onLayout={handleTooltipPosition}
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
        </MountMotion>
      </HStack>
    );
  }
);
