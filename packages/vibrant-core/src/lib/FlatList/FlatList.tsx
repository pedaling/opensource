import type { ReactElement } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import { calculateResponsiveValues } from '../calculateResponsiveValues';
import { getPaddedResponsiveArray } from '../getPaddedResponsiveArray';
import { ScrollBox } from '../ScrollBox';
import { useCurrentTheme } from '../ThemeProvider';
import { useResponsiveValue } from '../useResponsiveValue';
import { FlatListItem } from './FlatListItem';
import type { FlatListProps } from './FlatListProps';
import { withFlatListVariation } from './FlatListProps';

const SCROLL_THROTTLE = 1.2;

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

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const LOOP_BUFFER = Math.min(2, data.length);

    const buffedData = useMemo(
      () => (loop ? [...data.slice(-LOOP_BUFFER), ...data, ...data.slice(0, LOOP_BUFFER)] : data),
      [LOOP_BUFFER, data, loop]
    );

    const currentIndexRef = useRef(Math.min(initialIndex + (loop ? LOOP_BUFFER : 0), buffedData.length - 1));

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
      setIsDragging(true);

      const container = containerRef.current;

      if (container) {
        const pageX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;

        setStartX(pageX - container.offsetLeft);
      }
    }, []);

    const handleMouseMove = useCallback(
      (event: MouseEvent | TouchEvent) => {
        const container = containerRef.current;

        if (isDragging && container) {
          event.preventDefault();

          const computedColumnWidth = getResponsiveValue(columnWidth) ?? container.clientWidth;
          const currentX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;

          const updatedScrollLeft = container.scrollLeft + (startX - currentX) * SCROLL_THROTTLE;

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
      setIsDragging(false);

      if (loop && containerRef.current) {
        const computedColumnWidth = getResponsiveValue(columnWidth) ?? containerRef.current.clientWidth;

        if (currentIndexRef.current < LOOP_BUFFER) {
          setTimeout(() => {
            containerRef.current?.scrollTo({
              left: (data.length + LOOP_BUFFER - 1) * computedColumnWidth,
              behavior: 'auto',
            });
          }, 600);
        } else if (currentIndexRef.current >= LOOP_BUFFER + data.length) {
          setTimeout(() => {
            containerRef.current?.scrollTo({
              left: LOOP_BUFFER * computedColumnWidth,
              behavior: 'auto',
            });
          }, 600);
        }
      }
    }, [LOOP_BUFFER, columnWidth, data.length, getResponsiveValue, loop]);

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
    }, [
      LOOP_BUFFER,
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
