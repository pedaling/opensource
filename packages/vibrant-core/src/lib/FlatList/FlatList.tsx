import type { ReactElement } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import { calculateResponsiveValues } from '../calculateResponsiveValues';
import { getPaddedResponsiveArray } from '../getPaddedResponsiveArray';
import { ScrollBox } from '../ScrollBox';
import { useCurrentTheme } from '../ThemeProvider';
import { FlatListItem } from './FlatListItem';
import type { FlatListProps } from './FlatListProps';
import { withFlatListVariation } from './FlatListProps';

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

    const { width } = columnWidth
      ? { width: columnWidth }
      : calculateResponsiveValues({ columns, columnSpacing }, value => ({
          width: `calc((100% - ${(value.columns - 1) * value.columnSpacing}px) / ${value.columns})`,
        }));

    return (
      <ScrollBox
        as="ul"
        display="flex"
        width="100%"
        flexDirection="row"
        flexWrap={horizontal ? 'nowrap' : 'wrap'}
        columnGap={columnSpacing}
        rowGap={rowSpacing}
        data-testid={testId}
        {...props}
      >
        {data.map((item, index) => (
          <FlatListItem
            key={keyExtractor(item, index)}
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
