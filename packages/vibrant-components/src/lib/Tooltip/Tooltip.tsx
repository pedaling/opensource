import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, PressableBox, getWindowDimensions, useCurrentTheme, useResponsiveValue } from '@vibrant-ui/core';
import { MountMotion, Transition } from '@vibrant-ui/motion';
import type { LayoutEvent, Position, Rect } from '@vibrant-ui/utils';
import {
  detectOverflow,
  flipPosition,
  getElementRect,
  getOffsetByPosition,
  getShiftingOffset,
} from '@vibrant-ui/utils';
import { Body } from '../Body';
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
    return { x, y };
  }

  if (position.includes('top') || position.includes('bottom')) {
    const { x: shiftedX, y: shiftedY } = getShiftingOffset({ viewport, targetRect });

    console.log({ shiftedX, shiftedY });

    return { x: x + shiftedX, y: y + shiftedY };
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
          x: openerRect.x + flippedX,
          y: openerRect.y + flippedY,
        },
      })
    ) {
      return { x: flippedX, y: flippedY };
    }
  }

  return { x, y };
};

export const Tooltip = withTooltipVariation(
  ({
    children,
    content,
    enterDelay = 100,
    enterTouchDelay = 700,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    maxWidth = 320,
    onClose,
    onOpen,
    spacing = 8,
    position = 'top',
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [offSet, setOffset] = useState<{ x?: number; y?: number }>({});
    const openerRef = useRef<HTMLElement>(null);
    const [openerRect, setOpenerRect] = useState<Rect | null>(null);
    const {
      theme: { zIndex },
    } = useCurrentTheme();
    const { breakpointIndex } = useResponsiveValue({ useRootBreakPoints: true });
    const isMobile = breakpointIndex === 0;

    const handleTooltipPosition = useCallback(
      async ({ width, height, top, left }: LayoutEvent) => {
        const openerRect = await getElementRect(openerRef.current);

        const targetRect: Rect = { x: left, y: top, width, height };

        const { x, y } = getOffsetAvoidingOverflowByPosition(openerRect, targetRect, position, spacing);

        setOpenerRect(openerRect);

        setOffset({ x, y });

        setTimeout(() => {
          setIsMounted(true);
        }, enterDelay);
      },
      [enterDelay, position, spacing]
    );
    const openTooltip = () => {
      setTimeout(() => {
        setIsOpen(true);
      }, enterDelay);
    };

    const closeTooltip = () => {
      setTimeout(() => {
        setIsMounted(false);
      }, leaveDelay);
    };

    useEffect(() => {
      if (!isMounted) {
        setIsOpen(false);

        return;
      }
    }, [isMounted]);

    return (
      <Box ref={openerRef}>
        <PressableBox
          onFocusIn={isMobile ? openTooltip : undefined}
          onFocusOut={isMobile ? closeTooltip : undefined}
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
            onEnd={!isOpen ? () => setOffset({}) : undefined}
          >
            <Box
              maxWidth={maxWidth}
              position="fixed"
              zIndex={zIndex.dropdown}
              py={6}
              px={8}
              top={(offSet.y ?? 0) + (openerRect?.y ?? 0)}
              left={(offSet.x ?? 0) + (openerRect?.x ?? 0)}
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
      </Box>
    );
  }
);
