import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, getWindowDimensions, useResponsiveValue } from '@vibrant-ui/core';
import { Motion, Transition } from '@vibrant-ui/motion';
import { detectOverflow, flipPosition, getElementRect, getOffsetByPosition } from '@vibrant-ui/utils';
import type { LayoutEvent, Position, Rect } from '@vibrant-ui/utils';
import { Backdrop } from '../Backdrop';
import { Dismissible } from '../Dismissible';
import { withDropdownVariation } from './DropdownProps';

const CONTENT_PADDING = 20;
const BOTTOM_SHEET_CONTENT_PADDING = 24;
const Z_INDEX = 100;

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

  return { x, y };
};

export const Dropdown = withDropdownVariation(({ open, renderOpener, renderContents, position, spacing = 8 }) => {
  const openerRef = useRef<HTMLElement>(null);
  const targetRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(open);
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState<{ x?: number; y?: number }>({});
  const [contentHeight, setContentHeight] = useState<number>();
  const { breakpointIndex } = useResponsiveValue();
  const isMobile = breakpointIndex === 0;
  const isInitialBottomSheetAnimation = useRef(true);

  const openDropdown = useCallback(async () => {
    if (isMobile || !openerRef.current || !targetRef.current) {
      setVisible(true);

      return;
    }

    const [openerRect, targetRect] = await Promise.all([
      getElementRect(openerRef.current),
      getElementRect(targetRef.current),
    ]);

    const { x, y } = getOffsetAvoidingOverflowByPosition(openerRect, targetRect, position, spacing);

    setOffset({ x, y });

    setVisible(true);
  }, [isMobile, position, spacing]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleContentResize = useCallback(
    async ({ layout: { width, height, x, y } }: LayoutEvent) => {
      if (!isMobile) {
        const openerRect = await getElementRect(openerRef.current);

        const { x: offsetX, y: offsetY } = getOffsetAvoidingOverflowByPosition(
          openerRect,
          {
            x,
            y,
            width,
            height: height + CONTENT_PADDING * 2,
          },
          position,
          spacing
        );

        setOffset({ x: offsetX, y: offsetY });
      }

      setContentHeight(height);

      setVisible(true);
    },
    [isMobile, position, spacing]
  );

  const opener = useMemo(() => renderOpener(() => setIsOpen(!isOpen)), [isOpen, renderOpener]);

  useEffect(() => {
    if (isOpen) {
      openDropdown();
    } else {
      setVisible(false);

      isInitialBottomSheetAnimation.current = true;
    }
  }, [isOpen, openDropdown]);

  return !isMobile ? (
    <Box position="relative">
      <Box ref={openerRef}>{opener}</Box>
      {isOpen && (
        <Dismissible
          active={visible}
          onDismiss={() => {
            setIsOpen(false);

            setContentHeight(undefined);
          }}
        >
          <Transition
            ref={targetRef}
            animation={{
              opacity: visible ? 1 : 0,
              x: offset.x,
              y: offset.y,
            }}
            style={{
              x: offset.x,
              y: offset.y,
            }}
            duration={150}
            easing="easeOutQuad"
          >
            <Box position="absolute" zIndex={Z_INDEX}>
              <Box
                backgroundColor="background"
                py={CONTENT_PADDING}
                elevationLevel={4}
                borderRadiusLevel={1}
                width={[280, 280, 240]}
              >
                <Transition
                  animation={
                    visible
                      ? {
                          height: contentHeight,
                        }
                      : {}
                  }
                  duration={150}
                  easing="easeOutQuad"
                >
                  <Box overflow="hidden">
                    <Box onLayout={handleContentResize} flexShrink={0}>
                      {renderContents()}
                    </Box>
                  </Box>
                </Transition>
              </Box>
            </Box>
          </Transition>
        </Dismissible>
      )}
    </Box>
  ) : (
    <>
      {opener}
      <Backdrop open={visible} zIndex={Z_INDEX} onClick={closeModal} transitionDuration={visible ? 150 : 100}>
        <Motion
          animation={{
            y: {
              from: visible ? (contentHeight ?? 0) + 2 * BOTTOM_SHEET_CONTENT_PADDING : 0,
              to: visible ? 0 : (contentHeight ?? 0) + 2 * BOTTOM_SHEET_CONTENT_PADDING,
            },
          }}
          duration={visible ? 150 : 100}
          disabled={visible && !isInitialBottomSheetAnimation.current}
          onEnd={() => {
            if (visible) {
              isInitialBottomSheetAnimation.current = false;
            }
          }}
        >
          <Box
            mt="auto"
            p={BOTTOM_SHEET_CONTENT_PADDING}
            width="100%"
            backgroundColor="background"
            borderTopLeftRadiusLevel={4}
            borderTopRightRadiusLevel={4}
          >
            <Transition
              animation={{
                height: contentHeight,
              }}
              duration={150}
              easing="easeOutQuad"
            >
              <Box overflow="hidden">
                <Box onLayout={handleContentResize} flexShrink={0}>
                  {renderContents()}
                </Box>
              </Box>
            </Transition>
          </Box>
        </Motion>
      </Backdrop>
    </>
  );
});
