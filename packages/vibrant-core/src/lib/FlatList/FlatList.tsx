import type { ReactElement } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import { calculateResponsiveValues } from '../calculateResponsiveValues';
import { getPaddedResponsiveArray } from '../getPaddedResponsiveArray';
import { ScrollBox } from '../ScrollBox';
import { useCurrentTheme } from '../ThemeProvider';
import { useResponsiveValue } from '../useResponsiveValue';
import { FlatListItem } from './FlatListItem';
import type { FlatListProps } from './FlatListProps';
import { withFlatListVariation } from './FlatListProps';

const LOOP_BUFFER = 1;

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
    ...props
  }) => {
    const {
      theme: { breakpoints },
    } = useCurrentTheme();

    const { getResponsiveValue } = useResponsiveValue();

    const getResponsiveDisplay = (index: number) =>
      isDefined(maxRows)
        ? getPaddedResponsiveArray(breakpoints, columns).map((column, breakPointIndex) =>
            index < column * getPaddedResponsiveArray(breakpoints, maxRows)[breakPointIndex] ? 'flex' : 'none'
          )
        : undefined;

    const { width } = columnWidth
      ? { width: columnWidth }
      : calculateResponsiveValues({ columns, columnSpacing }, value => ({
          width: `calc((100% - ${(value.columns - 1) * value.columnSpacing}px) / ${value.columns})`,
        }));

    const itemRefs = useRef<HTMLElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [buffedData, setBuffedData] = useState(data);
    const [startX, setStartX] = useState(0);
    const buffedInitialIndex = initialIndex + (loop ? LOOP_BUFFER : 0);
    const currentIndexRef = useRef(buffedInitialIndex);

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

    useEffect(() => {
      if (loop) {
        const frontBuff = data.slice(data.length - LOOP_BUFFER);
        const backBuff = data.slice(0, LOOP_BUFFER);

        setBuffedData([...frontBuff, ...data, ...backBuff]);

        scrollToTargetIndex({ index: buffedInitialIndex, animation: false });
      }
    }, [buffedInitialIndex, data, loop, scrollToTargetIndex]);

    useEffect(() => {
      if (!horizontal) {
        return;
      }

      const container = containerRef.current;

      if (container) {
        const computedColumnWidth = getResponsiveValue(columnWidth) ?? container.clientWidth;
        const handleMouseDown = (event: MouseEvent | TouchEvent) => {
          setIsDragging(true);

          const pageX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;

          setStartX(pageX - container.offsetLeft);
        };

        const handleMouseMove = (event: MouseEvent | TouchEvent) => {
          if (isDragging) {
            event.preventDefault();

            const currentX = event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;

            const updatedScrollLeft = container.scrollLeft + (startX - currentX) * 1.2;

            container.scrollTo({ left: updatedScrollLeft, behavior: 'smooth' });

            const nextIndex = Math.round(updatedScrollLeft / computedColumnWidth);

            currentIndexRef.current = nextIndex;

            if (snap) {
              scrollToTargetIndex({ index: currentIndexRef.current, animation: true });
            }
          }
        };

        const handleMouseUp = () => {
          setIsDragging(false);

          if (loop) {
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
        };

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
      columnWidth,
      data.length,
      getResponsiveValue,
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
        snap={snap}
        columnGap={columnSpacing}
        rowGap={rowSpacing}
        data-testid={testId}
        hideScroll={horizontal ? true : false}
        ref={containerRef}
        {...props}
      >
        {buffedData.map((item, index) => (
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
        ))}
      </ScrollBox>
    );
  }
) as <Data>(props: FlatListProps<Data>) => ReactElement;
