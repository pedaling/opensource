import type { ViewToken } from 'react-native';
import { FlatList as NativeFlatList } from 'react-native';
import { isDefined, useCallbackRef } from '@vibrant-ui/utils';
import { Box } from '../Box';
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
    columns,
    maxRows,
    onItemImpressed,
    onEndReached,
    columnSpacing = 0,
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
      <Box
        key={currentColumn}
        base={NativeFlatList}
        data={data}
        renderItem={(itemInfo: { item: any; index: number }) => (
          <FlatListItem
            flex={transformResponsiveValue(columns, column => 1 / column)}
            display={getResponsiveDisplay(itemInfo.index)}
            mr={getResponsiveMarginRight(itemInfo.index)}
            mt={getResponsiveMarginTop(itemInfo.index)}
          >
            {renderItem(itemInfo)}
          </FlatListItem>
        )}
        onViewableItemsChanged={isDefined(onItemImpressed) ? handleViewableItemChange : undefined}
        keyExtractor={keyExtractor}
        numColumns={currentColumn}
        onEndReached={onEndReached}
        width="100%"
        {...props}
      />
    );
  }
);
