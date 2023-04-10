import { useCallback, useRef } from 'react';
import type { ViewToken } from 'react-native';
import { FlatList as NativeFlatList } from 'react-native';
import { isDefined, useCallbackRef } from '@vibrant-ui/utils';
import { getPaddedResponsiveArray } from '../getPaddedResponsiveArray';
import { useCurrentTheme } from '../ThemeProvider';
import { transformResponsiveValue } from '../transformResponsiveValue';
import { useResponsiveValue } from '../useResponsiveValue';
import { FlatListItem } from './FlatListItem';
import { withFlatListVariation } from './FlatListProps';

const LOOP_BUFFER = 3;

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
    // snap,
    loop,
    snapAlignment,
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

    const ref = useRef<NativeFlatList<{ index: number }>>(null);

    const scrollToIndex = useCallback(
      ({ index, animated = true }: { index: number; animated?: boolean }) => {
        if (index < 0 || index >= data.length) {
          return;
        }

        ref.current?.scrollToIndex({ index, animated });
      },
      [data.length]
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

    return (
      <NativeFlatList
        ref={ref}
        key={currentColumn}
        style={{ width: '100%' }}
        horizontal={horizontal}
        pagingEnabled={horizontal}
        data={data}
        decelerationRate={horizontal ? 'fast' : undefined}
        snapToAlignment={snapAlignment}
        snapToInterval={computedColumnWidth + computedSpacing}
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
        onMomentumScrollEnd={event => {
          const newPage = Math.round(event.nativeEvent.contentOffset.x / (computedColumnWidth + computedSpacing));

          if (loop && newPage >= data.length + LOOP_BUFFER) {
            scrollToIndex({ index: newPage - data.length, animated: false });
          }

          if (loop && newPage < LOOP_BUFFER) {
            scrollToIndex({ index: newPage + data.length, animated: false });
          }
        }}
        {...props}
      />
    );
  }
);
