import type { ReactElement } from 'react';
import type { Either } from '@vibrant-ui/utils';
import type { ResponsiveValue } from '../../types/ResponsiveValue';
import { withVariation } from '../withVariation';

export type FlatListProps<Data> = {
  id?: string;
  testId?: string;
  data: Data[];
  horizontal?: boolean;
  renderItem: (_: { item: Data; index: number }) => ReactElement | null;
  keyExtractor: (item: Data, index: number) => string;
  maxRows?: ResponsiveValue<number>;
  columnSpacing?: ResponsiveValue<number>;
  rowSpacing?: ResponsiveValue<number>;
  onItemImpressed?: (item: Data, index: number | null) => void;
  onEndReached?: () => void;
  handleItemRef?: (index: number) => (ref: HTMLElement) => void;
  snap?: ResponsiveValue<boolean>;
  snapAlignment?: 'center' | 'end' | 'start';
} & Either<
  {
    columns: ResponsiveValue<number>;
    columnWidth?: never;
  },
  {
    columnWidth: ResponsiveValue<number>;
    columns?: never;
  }
>;

export const withFlatListVariation = withVariation<FlatListProps<any>>('FlatList')();
