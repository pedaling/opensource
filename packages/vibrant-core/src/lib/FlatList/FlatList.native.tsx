import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ViewToken } from 'react-native';
import { FlatList as NativeFlatList } from 'react-native';
import { isDefined, useCallbackRef } from '@vibrant-ui/utils';
import { getPaddedResponsiveArray } from '../getPaddedResponsiveArray';
import { useCurrentTheme } from '../ThemeProvider';
import { transformResponsiveValue } from '../transformResponsiveValue';
import { useResponsiveValue } from '../useResponsiveValue';
import { FlatListItem } from './FlatListItem';
import { withFlatListVariation } from './FlatListProps';

export const LOOP_BUFFER = 3;

export const FlatList = withFlatListVariation(
  ({
    data,
    renderItem,
    keyExtractor,
    columns = 1,
    maxRows,
    onItemImpressed,
    onEndReached,
    columnSpacing = 0,
    columnWidth,
    horizontal = false,
    snap = false,
    loop,
    snapAlignment,
    initialIndex = 0,
    rowSpacing = 0,
    ...props
  }) => {
    const {
      theme: { breakpoints },
    } = useCurrentTheme();

    const { getResponsiveValue } = useResponsiveValue();

    const handleViewableItemChange = useCallbackRef<
      (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => void
    >(({ changed }) =>
      changed.filter(({ isViewable }) => isViewable).forEach(({ item, index }) => onItemImpressed?.(item, index))
    );

    const responsiveColumns = getPaddedResponsiveArray(breakpoints, columns);
    const responsiveColumnSpacing = getPaddedResponsiveArray(breakpoints, columnSpacing);
    const responsiveRowSpacing = getPaddedResponsiveArray(breakpoints, rowSpacing);
    const responsiveMaxRows = isDefined(maxRows) ? getPaddedResponsiveArray(breakpoints, maxRows) : undefined;

    const computedColumnWidth = getResponsiveValue(columnWidth ?? 0);
    const computedSpacing = getResponsiveValue(columnSpacing ?? 0);

    const boundedBuffer = Math.min(LOOP_BUFFER, data.length);

    const buffedData = useMemo(
      () => (loop ? [...data.slice(-boundedBuffer), ...data, ...data.slice(0, boundedBuffer)] : data),
      [boundedBuffer, data, loop]
    );
    const ref = useRef<NativeFlatList<{ index: number }>>(null);
    const currentIndexRef = useRef(Math.min(initialIndex + (loop ? boundedBuffer : 0), buffedData.length - 1));

    const [isReady, setIsReady] = useState(false);

    const scrollToIndex = useCallback(
      ({ index, animated = true }: { index: number; animated?: boolean }) => {
        if (index < 0 || index > data.length + (loop ? boundedBuffer : 0)) {
          return;
        }

        ref.current?.scrollToIndex({ index, animated });
      },
      [boundedBuffer, data.length, loop]
    );

    const getResponsiveMarginLeft = (index: number) =>
      responsiveColumns.map((_, breakPointIndex) => (index > 0 ? responsiveColumnSpacing[breakPointIndex] : 0));

    const getResponsiveMarginRight = (index: number) =>
      responsiveColumns.map((column, breakPointIndex) =>
        index % column === column - 1 ? 0 : responsiveColumnSpacing[breakPointIndex]
      );
    const getResponsiveMarginTop = (index: number) =>
      responsiveColumns.map((column, breakPointIndex) => (index < column ? 0 : responsiveRowSpacing[breakPointIndex]));

    const getResponsiveDisplay = (index: number) =>
      isDefined(responsiveMaxRows)
        ? responsiveColumns.map((column, breakPointIndex) =>
            index < column * responsiveMaxRows[breakPointIndex] ? 'flex' : 'none'
          )
        : undefined;
    const currentColumn = getResponsiveValue(columns);

    useEffect(() => {
      if (!isReady) {
        return;
      }

      scrollToIndex({ index: currentIndexRef.current, animated: false });
    }, [isReady, scrollToIndex]);

    return (
      <NativeFlatList
        ref={ref}
        key={currentColumn}
        style={{ width: '100%' }}
        horizontal={horizontal}
        pagingEnabled={snap}
        data={buffedData}
        onLayout={() => {
          setIsReady(true);
        }}
        decelerationRate={snap ? 'fast' : undefined}
        snapToAlignment={snap ? snapAlignment : undefined}
        snapToInterval={snap ? computedColumnWidth + computedSpacing : undefined}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: computedColumnWidth + computedSpacing,
          offset: (computedColumnWidth + computedSpacing) * index,
          index,
        })}
        renderItem={(itemInfo: { item: any; index: number }) => (
          <FlatListItem
            flex={horizontal ? undefined : transformResponsiveValue(columns, column => 1 / column)}
            flexShrink={horizontal ? 0 : 1}
            width={computedColumnWidth}
            display={getResponsiveDisplay(itemInfo.index)}
            ml={horizontal ? getResponsiveMarginLeft(itemInfo.index) : undefined}
            mr={getResponsiveMarginRight(itemInfo.index)}
            mt={getResponsiveMarginTop(itemInfo.index)}
          >
            {renderItem(itemInfo)}
          </FlatListItem>
        )}
        onViewableItemsChanged={isDefined(onItemImpressed) ? handleViewableItemChange : undefined}
        keyExtractor={(item: any, index: number) => `${keyExtractor(item, index)}-${index}`}
        numColumns={currentColumn}
        onEndReached={onEndReached}
        onScroll={event => {
          const newPage = Math.floor(event.nativeEvent.contentOffset.x / (computedColumnWidth + computedSpacing));

          if (newPage < 0 || newPage >= buffedData.length) {
            return;
          }

          currentIndexRef.current = newPage;
        }}
        onMomentumScrollEnd={event => {
          if (!loop) {
            return;
          }

          const newPage = Math.floor(event.nativeEvent.contentOffset.x / (computedColumnWidth + computedSpacing));

          if (newPage < boundedBuffer) {
            scrollToIndex({ index: boundedBuffer + data.length - 1, animated: false });
          } else if (newPage >= boundedBuffer + data.length) {
            scrollToIndex({ index: boundedBuffer, animated: false });
          }
        }}
        {...props}
      />
    );
  }
);
