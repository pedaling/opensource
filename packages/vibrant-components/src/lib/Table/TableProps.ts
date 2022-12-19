/* eslint-disable @typescript-eslint/naming-convention */
import type { ComponentType, ReactElement } from 'react';
import type {
  FlexboxSystemProps,
  ReactElementChild,
  ReactElementChildren,
  SizingSystemProps,
  TextChildren,
  TextProps,
} from '@vibrant-ui/core';
import type { Either } from '@vibrant-ui/utils';
import type { SortDirection } from './TableSortButton';

export type UseTableProps<Data extends Record<string, any>> = {
  data: Data[];
  rowKey: Extract<keyof Data, string>;
};

export type UseTableResult<Data extends Record<string, any>> = {
  Table: ComponentType<TableProps<Data>> & {
    Column: ComponentType<TableColumnProps<Data>>;
  };
};

export type TableProps<Data extends Record<string, any>> = {
  data: Data[];
  rowKey: Extract<keyof Data, string>;
  selectable?: boolean;
  selectButtons?: { text: string; onClick: (selectedRows: Data[]) => void }[];
  renderExpanded?: (row: Data) => ReactElementChildren;
  children: ReactElement<TableColumnProps<Data>>[];
  onRow?: {
    onClick: (row: Data) => void;
  };
  onSort?: (dataKey: string, direction: SortDirection) => void;
  emptyText?: TextChildren;
  emptyImage?: string;
  disabledRowKey?: keyof Data;
};

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
} & Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'> &
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
  Pick<TextProps, 'lineLimit' | 'textAlign' | 'wordBreak'>;
