import type { ViewToken } from 'react-native';
import { FlatList as NativeFlatList } from 'react-native';
import { isDefined, useCallbackRef } from '@vibrant-ui/utils';
import { getPaddedResponsiveArray } from '../getPaddedResponsiveArray';
import { useCurrentTheme } from '../ThemeProvider';
import { transformResponsiveValue } from '../transformResponsiveValue';
import { useResponsiveValue } from '../useResponsiveValue';
import { FlatListItem } from './FlatListItem';
import { withFlatListVariation } from './FlatListProps';

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
    snapAlignment,
    handleItemRef,
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
        key={currentColumn}
        style={{ width: '100%' }}
        horizontal={horizontal}
        pagingEnabled={horizontal}
        data={data}
        decelerationRate={horizontal ? 'fast' : undefined}
        snapToAlignment={snapAlignment}
        snapToInterval={computedColumnWidth + computedSpacing}
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
            ref={handleItemRef?.(itemInfo.index)}
          >
            {renderItem(itemInfo)}
          </FlatListItem>
        )}
        onViewableItemsChanged={isDefined(onItemImpressed) ? handleViewableItemChange : undefined}
        keyExtractor={keyExtractor}
        numColumns={currentColumn}
        onEndReached={onEndReached}
        {...props}
      />
    );
  }
);
