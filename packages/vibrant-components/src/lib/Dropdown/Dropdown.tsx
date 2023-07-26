import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  OverlayBox,
  ScrollBox,
  ThemeProvider,
  getWindowDimensions,
  useCurrentTheme,
  useCurrentThemeMode,
  useLockBodyScroll,
  useResponsiveValue,
  useSafeArea,
  useWindowDimensions,
} from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import {
  detectOverflow,
  flipPosition,
  getElementRect,
  getOffsetByPosition,
  isDefined,
  useControllableState,
} from '@vibrant-ui/utils';
import type { LayoutEvent, Position, Rect } from '@vibrant-ui/utils';
import { Backdrop } from '../Backdrop';
import { withDropdownVariation } from './DropdownProps';

const CONTENT_PADDING = 20;
const BOTTOM_SHEET_MIN_TOP_MARGIN = 120;

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
  ({
    defaultOpen = false,
    open,
    renderOpener,
    renderContents,
    position = 'bottom',
    spacing = 8,
    onClose,
    onOpen,
    testId = 'dropdown',
  }) => {
    const openerRef = useRef<HTMLElement>(null);
    const customOpenerRef = useRef<HTMLElement>(null);

    const [isOpen, setIsOpen] = useControllableState<boolean>({
      value: open,
      defaultValue: defaultOpen,
    });
    const [visible, setVisible] = useState(false);
    const [offset, setOffset] = useState<{ x?: number; y?: number }>({});
    const [containerHeight, setContainerHeight] = useState<number>();
    const [contentHeight, setContentHeight] = useState<number>();

    const { height: viewportHeight } = useWindowDimensions();
    const { generateStyle } = useSafeArea();
    const { bottom: bottomSheetPaddingBottom } = generateStyle({
      edges: ['bottom'],
      minInsets: { bottom: 20 },
    });
    const { breakpointIndex } = useResponsiveValue({ useRootBreakPoints: true });
    const isMobile = breakpointIndex === 0;
    const {
      theme: { zIndex },
    } = useCurrentTheme();
    const { mode: rootMode } = useCurrentThemeMode({ root: true });
    const rootThemeMode = useMemo(
      () => ({
        mode: rootMode,
      }),
      [rootMode]
    );

    useLockBodyScroll(isOpen || visible);

    const openDropdown = useCallback(() => {
      setIsOpen(true);

      onOpen?.();
    }, [onOpen, setIsOpen]);

    const closeDropdown = useCallback(() => {
      setIsOpen(false);

      onClose?.();
    }, [onClose, setIsOpen]);

    const opener = useMemo(
      () => renderOpener?.({ open: openDropdown, isOpen, ref: customOpenerRef }),
      [isOpen, openDropdown, renderOpener]
    );

    const handleContentResize = useCallback(
      async ({ width, height, top, left }: LayoutEvent) => {
        if (!isMobile) {
          const openerRect = await getElementRect(customOpenerRef.current ?? openerRef.current);

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
      },
      [isMobile, position, spacing]
    );

    const handleContainerResize = useCallback(({ height }: LayoutEvent) => {
      setContainerHeight(height);
    }, []);

    useEffect(() => {
      if (!isOpen) {
        setVisible(false);
      }
    }, [isOpen]);

    useEffect(() => {
      if (isDefined(offset?.x) && isDefined(offset?.y)) {
        setVisible(true);
      }
    }, [offset]);

    useEffect(() => {
      if (isMobile && isDefined(contentHeight)) {
        setVisible(true);
      }
    }, [contentHeight, isMobile]);

    useEffect(() => {
      if (!visible) {
        setOffset({});

        setContentHeight(undefined);
      }
    }, [visible]);

    return (
      <>
        <Box ref={openerRef}>{opener}</Box>
        {!isMobile && (
          <ThemeProvider theme={rootThemeMode}>
            {isOpen && (
              <OverlayBox
                open={isOpen}
                onDismiss={closeDropdown}
                targetRef={customOpenerRef.current ? customOpenerRef : openerRef}
                zIndex={zIndex.dropdown}
              >
                <Transition
                  animation={{
                    opacity: visible ? 1 : 0,
                    ...(visible
                      ? {
                          x: offset.x,
                          y: offset.y,
                        }
                      : {}),
                  }}
                  style={{
                    x: offset.x,
                    y: offset.y,
                  }}
                  duration={200}
                >
                  <Box>
                    <Box
                      backgroundColor="surface2"
                      py={CONTENT_PADDING}
                      elevationLevel={4}
                      borderRadiusLevel={1}
                      minWidth={[280, 280, 240]}
                    >
                      <Transition
                        animation={
                          visible
                            ? {
                                height: contentHeight,
                              }
                            : {}
                        }
                        duration={200}
                      >
                        <Box overflow="hidden" height={contentHeight}>
                          <Box onLayout={handleContentResize} flexShrink={0} data-testid={testId}>
                            {renderContents({ close: closeDropdown })}
                          </Box>
                        </Box>
                      </Transition>
                    </Box>
                  </Box>
                </Transition>
              </OverlayBox>
            )}
          </ThemeProvider>
        )}
        {isMobile && (
          <ThemeProvider theme={rootThemeMode}>
            <Backdrop open={isOpen} zIndex={zIndex.dropdown} onClick={closeDropdown} transitionDuration={200}>
              <Transition
                animation={{
                  y: visible ? 0 : containerHeight ?? viewportHeight,
                }}
                duration={200}
              >
                <Box
                  mt="auto"
                  pt={24}
                  pb={bottomSheetPaddingBottom}
                  width="100%"
                  maxHeight={viewportHeight - BOTTOM_SHEET_MIN_TOP_MARGIN}
                  backgroundColor="surface2"
                  borderTopLeftRadiusLevel={4}
                  borderTopRightRadiusLevel={4}
                  onLayout={handleContainerResize}
                >
                  <Transition
                    animation={{
                      height: contentHeight,
                    }}
                    duration={200}
                  >
                    <ScrollBox
                      height={contentHeight}
                      hideScroll={(containerHeight ?? 0) < viewportHeight - BOTTOM_SHEET_MIN_TOP_MARGIN}
                    >
                      <Box onLayout={handleContentResize} flexShrink={0} data-testid={testId}>
                        {renderContents({ close: closeDropdown })}
                      </Box>
                    </ScrollBox>
                  </Transition>
                </Box>
              </Transition>
            </Backdrop>
          </ThemeProvider>
        )}
      </>
    );
  }
);
