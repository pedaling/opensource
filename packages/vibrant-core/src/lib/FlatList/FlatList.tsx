import type { ReactElement } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import { Box } from '../Box';
import { getPaddedResponsiveArray } from '../getPaddedResponsiveArray';
import { useCurrentTheme } from '../ThemeProvider';
import { transformResponsiveValue } from '../transformResponsiveValue';
import { FlatListItem } from './FlatListItem';
import type { FlatListProps } from './FlatListProps';
import { withFlatListVariation } from './FlatListProps';

export const FlatList = withFlatListVariation(
  ({
    testId = 'flat-list',
    data,
    renderItem,
    keyExtractor,
    columns,
    maxRows,
    columnSpacing = 0,
    rowSpacing = 0,
    onEndReached,
    onItemImpressed,
    ...props
  }) => {
    const {
      theme: { breakpoints },
    } = useCurrentTheme();
    const getResponsiveDisplay = (index: number) =>
      isDefined(maxRows)
        ? getPaddedResponsiveArray(breakpoints, columns).map((column, breakPointIndex) =>
            index < column * getPaddedResponsiveArray(breakpoints, maxRows)[breakPointIndex] ? 'flex' : 'none'
          )
        : undefined;

    return (
      <Box
        as="ul"
        display="grid"
        width="100%"
        gridTemplateColumns={transformResponsiveValue(columns, column => `repeat(${column}, 1fr)`)}
        columnGap={columnSpacing}
        rowGap={rowSpacing}
        data-testid={testId}
        {...props}
      >
        {data.map((item, index) => (
          <FlatListItem
            key={keyExtractor(item, index)}
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
      </Box>
    );
  }
) as <Data>(props: FlatListProps<Data>) => ReactElement;
