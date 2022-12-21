import type { ReactElementChild, SizingSystemProps, TextChildren, TextProps } from '@vibrant-ui/core';
import type { Either } from '@vibrant-ui/utils';
import type { SortDirection } from '../TableSortButton';

export type TableColumnProps<Data extends Record<string, any>> = {
  key: string;
  dataKey?: keyof Data;
  selectable?: boolean;
  alignVerticalHeader?: 'center' | 'flex-end' | 'flex-start';
  alignHorizontalHeader?: 'center' | 'flex-end' | 'flex-start';
  alignVerticalCell?: 'center' | 'flex-end' | 'flex-start';
  alignHorizontalCell?: 'center' | 'flex-end' | 'flex-start';
  formatData?: (row: Data) => TextChildren;
  renderCell?: (row: Data) => ReactElementChild;
  onCell?: {
    onClick?: (row: Data) => void;
    onCopy?: (row: Data) => void;
  };
} & Pick<SizingSystemProps, 'width'> &
  Either<
    {
      title?: TextChildren;
      description?: TextChildren;
      sortable?: boolean;
      defaultSortDirection?: SortDirection;
    },
    {
      renderHeader?: () => ReactElementChild;
    }
  > &
  Pick<TextProps, 'lineLimit' | 'wordBreak'>;
