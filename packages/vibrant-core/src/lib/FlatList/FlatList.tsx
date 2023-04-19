import type { ReactElement } from 'react';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import { calculateResponsiveValues } from '../calculateResponsiveValues';
import { getPaddedResponsiveArray } from '../getPaddedResponsiveArray';
import { ScrollBox } from '../ScrollBox';
import { useCurrentTheme } from '../ThemeProvider';
import { useResponsiveValue } from '../useResponsiveValue';
import { FlatListItem } from './FlatListItem';
import type { FlatListProps } from './FlatListProps';
import { withFlatListVariation } from './FlatListProps';

const SCROLL_ACCELERATION = 1.2;

const LOOP_BUFFER = 3;
// When looping, FlatList will get buffer data at the front and end respectively to make scrolling auto behavior smoothly.

export const FlatList = withFlatListVariation(
  ({
    testId,
    data,
    renderItem,
    keyExtractor,
    columns = 1,
    columnWidth,
    maxRows,
    columnSpacing = 0,
    rowSpacing = 0,
    onEndReached,
    onItemImpressed,
    horizontal = false,
    snap,
    loop,
    snapAlignment,
    initialIndex = 0,
    hideScroll = true,
    ...props
  }) => {
    const {
      theme: { breakpoints },
    } = useCurrentTheme();

    const { getResponsiveValue } = useResponsiveValue();

    const getResponsiveDisplay = useCallback(
      (index: number) =>
        isDefined(maxRows)
          ? getPaddedResponsiveArray(breakpoints, columns).map((column, breakPointIndex) =>
              index < column * getPaddedResponsiveArray(breakpoints, maxRows)[breakPointIndex] ? 'flex' : 'none'
            )
          : undefined,
      [breakpoints, columns, maxRows]
    );

    const { width } = columnWidth
      ? { width: columnWidth }
      : calculateResponsiveValues({ columns, columnSpacing }, value => ({
          width: `calc((100% - ${(value.columns - 1) * value.columnSpacing}px) / ${value.columns})`,
        }));

    const itemRefs = useRef<HTMLElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const isDragging = useRef(false);
    const startX = useRef(0);

    const boundedBuffer = Math.min(LOOP_BUFFER, data.length);
    const buffedData = useMemo(
      () => (loop ? [...data.slice(-boundedBuffer), ...data, ...data.slice(0, boundedBuffer)] : data),
      [boundedBuffer, data, loop]
    );

    const currentIndexRef = useRef(Math.min(initialIndex + (loop ? boundedBuffer : 0), buffedData.length - 1));

    const handleItemRef = (index: number) => (ref: HTMLElement) => {
      itemRefs.current[index] = ref;
    };

    const scrollToTargetIndex = useCallback(
      ({ index, animation = false }: { index: number; animation?: boolean }) => {
        if (index < 0 || index >= buffedData.length) {
          return;
        }

        const targetItem = itemRefs.current[index];

        containerRef.current?.scrollTo({
          left: targetItem.offsetLeft,
          behavior: animation ? 'smooth' : 'auto',
        });
      },
      [buffedData.length]
    );

    const memoizedFlatListItems = useMemo(
      () =>
        buffedData.map((item, index) => (
          <FlatListItem
            key={`${keyExtractor(item, index)}-${index}`}
            ref={handleItemRef?.(index)}
            snapAlignment={snapAlignment}
            width={width}
            flexShrink={horizontal ? 0 : 1}
            display={getResponsiveDisplay(index)}
            onImpressed={
              isDefined(onItemImpressed) || index === data.length - 1
                ? () => {
                    onItemImpressed?.(item, index);

                    if (index === data.length - 1) {
                      onEndReached?.();
                    }
                  }
                : undefined
            }
          >
            {renderItem({ item, index })}
          </FlatListItem>
        )),
      [
        buffedData,
        data.length,
        getResponsiveDisplay,
        horizontal,
        keyExtractor,
        onEndReached,
        onItemImpressed,
        renderItem,
        snapAlignment,
        width,
      ]
    );

    const handleMouseDown = useCallback((event: MouseEvent | TouchEvent) => {
      isDragging.current = true;

      const container = containerRef.current;

      if (container) {
        const pageX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;

        startX.current = pageX - container.offsetLeft;
      }
    }, []);

    const handleMouseMove = useCallback(
      (event: MouseEvent | TouchEvent) => {
        const container = containerRef.current;

        if (isDragging.current && container) {
          event.preventDefault();

          const computedColumnWidth = getResponsiveValue(columnWidth) ?? container.clientWidth;
          const currentX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;

          const updatedScrollLeft = container.scrollLeft + (startX.current - currentX) * SCROLL_ACCELERATION;

          container.scrollTo({ left: updatedScrollLeft, behavior: 'smooth' });

          const nextIndex = Math.round(updatedScrollLeft / computedColumnWidth);

          currentIndexRef.current = nextIndex;

          if (snap) {
            scrollToTargetIndex({ index: currentIndexRef.current, animation: true });
          }
        }
      },
      [columnWidth, getResponsiveValue, isDragging, scrollToTargetIndex, snap, startX]
    );

    const handleMouseUp = useCallback(() => {
      isDragging.current = false;

      if (loop && containerRef.current) {
        const computedColumnWidth = getResponsiveValue(columnWidth) ?? containerRef.current.clientWidth;

        if (currentIndexRef.current < boundedBuffer) {
          setTimeout(() => {
            containerRef.current?.scrollTo({
              left: (data.length + boundedBuffer - 1) * computedColumnWidth,
              behavior: 'auto',
            });
          }, 600);
        } else if (currentIndexRef.current >= boundedBuffer + data.length) {
          setTimeout(() => {
            containerRef.current?.scrollTo({
              left: boundedBuffer * computedColumnWidth,
              behavior: 'auto',
            });
          }, 600);
        }
      }
    }, [boundedBuffer, columnWidth, data.length, getResponsiveValue, loop]);

    useEffect(() => {
      scrollToTargetIndex({ index: currentIndexRef.current, animation: false });
    }, [scrollToTargetIndex]);

    useEffect(() => {
      if (!horizontal) {
        return;
      }

      const container = containerRef.current;

      if (container) {
        container.addEventListener('mousedown', handleMouseDown);

        container.addEventListener('mousemove', handleMouseMove);

        container.addEventListener('mouseup', handleMouseUp);

        container.addEventListener('mouseleave', handleMouseUp);

        return () => {
          container.removeEventListener('mousedown', handleMouseDown);

          container.removeEventListener('mousemove', handleMouseMove);

          container.removeEventListener('mouseup', handleMouseUp);

          container.removeEventListener('mouseleave', handleMouseUp);
        };
      }

      return;
    }, [
      columnWidth,
      data.length,
      getResponsiveValue,
      handleMouseDown,
      handleMouseMove,
      handleMouseUp,
      horizontal,
      isDragging,
      loop,
      scrollToTargetIndex,
      snap,
      startX,
      width,
    ]);

    return (
      <ScrollBox
        as="ul"
        display="flex"
        width="100%"
        flexDirection="row"
        flexWrap={horizontal ? 'nowrap' : 'wrap'}
        scrollSnap={snap}
        columnGap={columnSpacing}
        rowGap={rowSpacing}
        data-testid={testId}
        hideScroll={hideScroll}
        ref={containerRef}
        {...props}
      >
        {memoizedFlatListItems}
      </ScrollBox>
    );
  }
) as <Data>(props: FlatListProps<Data>) => ReactElement;
