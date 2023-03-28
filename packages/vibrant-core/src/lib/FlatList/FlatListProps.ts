import type { ReactElement } from 'react';
import type { ResponsiveValue } from '../../types/ResponsiveValue';
import { withVariation } from '../withVariation';

export type FlatListProps<Data> = {
  id?: string;
  testId?: string;
  data: Data[];
  renderItem: (_: { item: Data; index: number }) => ReactElement | null;
  keyExtractor: (item: Data, index: number) => string;
  columns: ResponsiveValue<number>;
  maxRows?: ResponsiveValue<number>;
  columnSpacing?: ResponsiveValue<number>;
  rowSpacing?: ResponsiveValue<number>;
  onItemImpressed?: (item: Data, index: number | null) => void;
  onEndReached?: () => void;
};

export const withFlatListVariation = withVariation<FlatListProps<any>>('FlatList')();
