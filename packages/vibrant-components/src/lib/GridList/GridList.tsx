import type { ReactElement } from 'react';
import { FlatList, ThemeProvider, useCurrentTheme } from '@vibrant-ui/core';
import type { GridListProps } from './GridListProps';
import { withGridListVariation } from './GridListProps';

export const GridList = withGridListVariation(({ testId = 'grid-list', breakpoints, renderItem, ...props }) => {
  const {
    theme: { breakpoints: currentBreakPoints },
  } = useCurrentTheme();

  if (breakpoints) {
    return (
      <ThemeProvider theme={{ breakpoints }}>
        <FlatList
          testId={testId}
          renderItem={itemInfo => (
            <ThemeProvider theme={{ breakpoints: currentBreakPoints }}>{renderItem(itemInfo)}</ThemeProvider>
          )}
          {...props}
        ></FlatList>
      </ThemeProvider>
    );
  }

  return <FlatList testId={testId} renderItem={renderItem} {...props} />;
}) as <Data extends NonNullable<unknown>>(props: GridListProps<Data>) => ReactElement;
