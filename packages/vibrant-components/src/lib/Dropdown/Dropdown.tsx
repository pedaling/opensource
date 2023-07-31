import type { Align, Side } from 'packages/vibrant-utils/src/types';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  PortalBox,
  PressableBox,
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

          setOffset({ x: openerRect.x + offsetX, y: openerRect.y + offsetY });
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
        {!isMobile && isOpen && (
          <ThemeProvider theme={rootThemeMode}>
            <PortalBox zIndex={zIndex.dropdown} top={0} right={0} bottom={0} left={0}>
              <PressableBox
                as="div"
                position="absolute"
                cursor="default"
                top={0}
                right={0}
                bottom={0}
                left={0}
                onClick={closeDropdown}
              />
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
                <Box alignSelf="flex-start">
                  <Box
                    backgroundColor="surface2"
                    py={CONTENT_PADDING}
                    elevationLevel={4}
                    rounded="sm"
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
            </PortalBox>
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
