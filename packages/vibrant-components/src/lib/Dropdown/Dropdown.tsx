import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  OverlayBox,
  ScrollBox,
  ThemeProvider,
  getWindowDimensions,
  useCurrentThemeMode,
  useLockBodyScroll,
  useResponsiveValue,
  useSafeArea,
  useWindowDimensions,
} from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { detectOverflow, flipPosition, getElementRect, getOffsetByPosition } from '@vibrant-ui/utils';
import type { LayoutEvent, Position, Rect } from '@vibrant-ui/utils';
import { Backdrop } from '../Backdrop';
import { withDropdownVariation } from './DropdownProps';

const CONTENT_PADDING = 20;
const BOTTOM_SHEET_CONTENT_TOP_PADDING = 24;
const BOTTOM_SHEET_CONTENT_BOTTOM_PADDING = 20;
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

export const Dropdown = withDropdownVariation(
  ({ open, renderOpener, renderContents, position = 'bottom', spacing = 8 }) => {
    const openerRef = useRef<HTMLElement>(null);
    const targetRef = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(open);
    const [visible, setVisible] = useState(false);
    const [offset, setOffset] = useState<{ x?: number; y?: number }>({});
    const [contentHeight, setContentHeight] = useState<number>();
    const { height: viewportHeight } = useWindowDimensions();
    const { insets } = useSafeArea();

    const { breakpointIndex } = useResponsiveValue({ rootBreakPoints: true });
    const isMobile = breakpointIndex === 0;
    const { mode: rootMode } = useCurrentThemeMode({ root: true });
    const rootThemeMode = useMemo(
      () => ({
        mode: rootMode,
      }),
      [rootMode]
    );

    useLockBodyScroll(isMobile && (isOpen || visible));

    const openDropdown = useCallback(async () => {
      if (isMobile || !openerRef.current || !targetRef.current) {
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

    const closeDropdown = useCallback(() => {
      setIsOpen(false);

      setContentHeight(undefined);
    }, []);

    const handleContentResize = useCallback(
      async ({ width, height, top, left }: LayoutEvent) => {
        if (!isMobile) {
          const openerRect = await getElementRect(openerRef.current);

          const { x: offsetX, y: offsetY } = getOffsetAvoidingOverflowByPosition(
            openerRect,
            {
              x: left,
              y: top,
              width,
              height: height + CONTENT_PADDING * 2,
            },
            position,
            spacing
          );

          setOffset({ x: offsetX, y: offsetY });
        }

        setContentHeight(height);

        if (isOpen) {
          setVisible(true);
        }
      },
      [isMobile, isOpen, position, spacing]
    );

    const opener = useMemo(() => renderOpener(() => setIsOpen(!isOpen)), [isOpen, renderOpener]);

    useEffect(() => {
      if (isOpen) {
        openDropdown();
      } else {
        setVisible(false);
      }
    }, [isOpen, openDropdown]);

    return (
      <Box position="relative">
        <Box ref={openerRef}>{opener}</Box>
        {isOpen && !isMobile && (
          <ThemeProvider theme={rootThemeMode}>
            <Transition
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
            >
              <OverlayBox open={true} ref={targetRef} onDismiss={closeDropdown} targetRef={openerRef} zIndex={Z_INDEX}>
                <Box
                  backgroundColor="surface2"
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
                  >
                    <Box overflow="hidden" height={contentHeight}>
                      <Box onLayout={handleContentResize} flexShrink={0}>
                        {renderContents(closeDropdown)}
                      </Box>
                    </Box>
                  </Transition>
                </Box>
              </OverlayBox>
            </Transition>
          </ThemeProvider>
        )}
        {isMobile && (
          <ThemeProvider theme={rootThemeMode}>
            <Backdrop open={isOpen} zIndex={Z_INDEX} onClick={closeDropdown} transitionDuration={visible ? 150 : 100}>
              <Transition
                animation={{
                  y: visible
                    ? 0
                    : (contentHeight ?? 0) + (BOTTOM_SHEET_CONTENT_TOP_PADDING + BOTTOM_SHEET_CONTENT_BOTTOM_PADDING),
                }}
                duration={visible ? 150 : 100}
              >
                <Box
                  mt="auto"
                  pt={BOTTOM_SHEET_CONTENT_TOP_PADDING}
                  pb={
                    typeof insets.bottom === 'string'
                      ? `calc(${BOTTOM_SHEET_CONTENT_BOTTOM_PADDING}px + ${insets.bottom})`
                      : BOTTOM_SHEET_CONTENT_BOTTOM_PADDING + insets.bottom
                  }
                  width="100%"
                  maxHeight={viewportHeight - 120}
                  backgroundColor="surface2"
                  borderTopLeftRadiusLevel={4}
                  borderTopRightRadiusLevel={4}
                >
                  <Transition
                    animation={{
                      height: contentHeight,
                    }}
                    duration={150}
                  >
                    <ScrollBox height={contentHeight}>
                      <Box onLayout={handleContentResize} flexShrink={0}>
                        {renderContents(closeDropdown)}
                      </Box>
                    </ScrollBox>
                  </Transition>
                </Box>
              </Transition>
            </Backdrop>
          </ThemeProvider>
        )}
      </Box>
    );
  }
);
