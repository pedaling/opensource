import type { ReactElementChild, SizingSystemProps, TextChildren, TextSystemProps } from '@vibrant-ui/core';
import type { Either } from '@vibrant-ui/utils';
import type { SortDirection } from '../TableSortButton';

export type TableColumnProps<Data extends Record<string, any>> = {
  key: string;
  selectable?: boolean;
  alignVertical?: { header?: 'center' | 'end' | 'start'; dataCell?: 'center' | 'end' | 'start' };
  alignHorizontal?: { header: 'center' | 'end' | 'start'; dataCell?: 'center' | 'end' | 'start' };
  lineLimit?: { header?: TextSystemProps['lineLimit']; dataCell?: TextSystemProps['lineLimit'] };
  wordBreak?: { header?: TextSystemProps['wordBreak']; dataCell?: TextSystemProps['wordBreak'] };
  whiteSpace?: { header?: TextSystemProps['whiteSpace']; dataCell?: TextSystemProps['whiteSpace'] };
  overflowWrap?: { header?: TextSystemProps['overflowWrap']; dataCell?: TextSystemProps['overflowWrap'] };
  formatData?: (row: Data) => TextChildren;
  onDataCell?: {
    onClick?: (row: Data) => void;
    onCopy?: (row: Data) => void;
  };
} & Either<
  {
    dataKey?: keyof Data;
  },
  {
    renderDataCell: (row: Data) => ReactElementChild;
  }
> &
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
  Pick<SizingSystemProps, 'width'>;
