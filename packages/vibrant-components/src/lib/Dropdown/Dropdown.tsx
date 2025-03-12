/* eslint-disable max-lines */
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
  useBackHandler,
  useControllableState,
} from '@vibrant-ui/utils';
import type { Align, LayoutEvent, Position, Rect, Side } from '@vibrant-ui/utils';
import { Backdrop } from '../Backdrop';
import { withDropdownVariation } from './DropdownProps';

const CONTENT_PADDING = 12;
const BOTTOM_SHEET_MIN_TOP_MARGIN = 120;

const getCrossSides = (side: Side): Side[] => {
  if (side === 'top' || side === 'bottom') {
    return ['left', 'right'];
  }

  return ['top', 'bottom'];
};

const getOffsetAvoidingOverflowByPosition = (
  openerRect: Rect,
  targetRect: Rect,
  position: Position,
  spacing?: number
) => {
  const [side, alignment] = position.split('-') as [Side, Align | undefined];

  const { x, y } = getOffsetByPosition({
    referenceRect: openerRect,
    targetRect,
    position,
    spacing,
  });

  const viewport = getWindowDimensions();
  const overflow = detectOverflow({
    viewport,
    targetRect: { ...targetRect, x: openerRect.x + x, y: openerRect.y + y },
  });

  let nextSide = side;
  let nextAligns = [alignment];

  if (Object.values(overflow).every(value => value <= 0)) {
    return { x, y };
  }

  if (overflow[side] > 0) {
    nextSide = flipPosition(side) as Side;
  }

  if (getCrossSides(side).some(crossSide => overflow[crossSide] > 0)) {
    nextAligns = ['start', undefined, 'end'].filter(align => align !== alignment) as (Align | undefined)[];
  }

  const offset = nextAligns
    .map(align =>
      getOffsetByPosition({
        referenceRect: openerRect,
        targetRect,
        position: (align !== undefined ? [nextSide, align].join('-') : nextSide) as Position,
        spacing,
      })
    )
    .find(({ x, y }) => {
      const overflow = detectOverflow({
        viewport,
        targetRect: { ...targetRect, x: openerRect.x + x, y: openerRect.y + y },
      });

      return Object.values(overflow).every(value => value <= 0);
    });

  return offset ? offset : { x, y };
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
    py,
    pb,
    pt,
    width,
  }) => {
    const openerRef = useRef<HTMLElement>(null);
    const customOpenerRef = useRef<HTMLElement>(null);

    const [isOpen, setIsOpen] = useControllableState<boolean>({
      value: open,
      defaultValue: defaultOpen,
    });
    const [visible, setVisible] = useState(false);
    const [offset, setOffset] = useState<{ x?: number; y?: number }>({});
    const [direction, setDirection] = useState<'bottom' | 'top'>(position.startsWith('top') ? 'top' : 'bottom');
    const [containerHeight, setContainerHeight] = useState<number>();
    const [contentHeight, setContentHeight] = useState<number>();

    const { height: viewportHeight } = useWindowDimensions();
    const { generateStyle } = useSafeArea();
    const { bottom: bottomSheetPaddingBottom } = generateStyle({
      edges: ['bottom'],
      minInsets: { bottom: 20 },
    });
    const { breakpointIndex, getResponsiveValue } = useResponsiveValue({ useRootBreakPoints: true });
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

    const backHandler = useCallback(() => {
      if (!isMobile) {
        return false;
      }

      setIsOpen(false);

      return isOpen;
    }, [isMobile, isOpen, setIsOpen]);

    useBackHandler(backHandler);

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
              height: height + (py ? getResponsiveValue(py) : CONTENT_PADDING) * 2,
            },
            position,
            spacing
          );

          setOffset({ x: offsetX, y: offsetY });

          if (offsetY > 0) {
            setDirection('bottom');
          }

          if (offsetY < 0) {
            setDirection('top');
          }
        }

        setContentHeight(height);
      },
      [getResponsiveValue, isMobile, position, py, spacing]
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
        {!isMobile && isOpen && (
          <ThemeProvider theme={rootThemeMode}>
            <Transition
              animation={{
                opacity: visible ? 1 : 0,
                scale: visible ? 1 : 0.95,
              }}
              duration={150}
            >
              <OverlayBox
                open={isOpen}
                onDismiss={closeDropdown}
                targetRef={customOpenerRef.current ? customOpenerRef : openerRef}
                zIndex={zIndex.dropdown}
                top={offset.y}
                left={offset.x}
              >
                <Box alignSelf="flex-start">
                  <Box
                    backgroundColor="surface2"
                    py={isDefined(py) ? py : CONTENT_PADDING}
                    elevationLevel={2}
                    rounded="md"
                    minWidth={[280, 280, 240]}
                    pb={pb}
                    pt={pt}
                    width={width}
                  >
                    <Transition
                      animation={
                        visible
                          ? {
                              y: direction === 'bottom' ? 0 : 0,
                              height: contentHeight,
                            }
                          : {
                              y: direction === 'bottom' ? -8 : 8,
                            }
                      }
                      duration={150}
                    >
                      <Box overflow="hidden" height={contentHeight}>
                        <Box onLayout={handleContentResize} flexShrink={0} data-testid={testId}>
                          {renderContents({ close: closeDropdown })}
                        </Box>
                      </Box>
                    </Transition>
                  </Box>
                </Box>
              </OverlayBox>
            </Transition>
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
                  elevationLevel={3}
                  backgroundColor="surface2"
                  roundedTopLeft="xxl"
                  roundedTopRight="xxl"
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
