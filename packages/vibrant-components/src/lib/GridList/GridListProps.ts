import type { ReactElement } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type GridListProps<Data> = {
  id?: string;
  testId?: string;
  data: Data[];
  renderItem: (_: { item: Data; index: number }) => ReactElement | null;
  keyExtractor: (item: Data, index: number) => string;
  breakPoints?: number[];
  columns: ResponsiveValue<number>;
  maxRows?: ResponsiveValue<number>;
  columnSpacing?: ResponsiveValue<number>;
  rowSpacing?: ResponsiveValue<number>;
  onItemImpressed?: (item: Data, index: number | null) => void;
  onEndReached?: () => void;
};

export const withGridListVariation = withVariation<GridListProps<any>>('GridList')();
