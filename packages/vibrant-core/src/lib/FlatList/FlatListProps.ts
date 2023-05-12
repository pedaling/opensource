import type { ReactElement } from 'react';
import type { Either } from '@vibrant-ui/utils';
import type { ResponsiveValue } from '../../types/ResponsiveValue';
import { withVariation } from '../withVariation';

export type FlatListProps<Data> = {
  id?: string;
  testId?: string;
  px?: ResponsiveValue<number>;
  data: Data[];
  renderItem: (_: { item: Data; index: number }) => ReactElement | null;
  keyExtractor: (item: Data, index: number) => string;
  maxRows?: ResponsiveValue<number>;
  columnSpacing?: ResponsiveValue<number>;
  rowSpacing?: ResponsiveValue<number>;
  onItemImpressed?: (item: Data, index: number | null) => void;
  onEndReached?: () => void;
  snap?: boolean;
  loop?: boolean;
  initialIndex?: number;
  snapAlignment?: 'center' | 'end' | 'start';
  hideScroll?: boolean;
} & Either<
  {
    horizontal?: false;
    columns: ResponsiveValue<number>;
    columnWidth?: never;
  },
  {
    horizontal: true;
    columnWidth: ResponsiveValue<number>;
    columns?: never;
  }
>;

export const withFlatListVariation = withVariation<FlatListProps<any>>('FlatList')();
