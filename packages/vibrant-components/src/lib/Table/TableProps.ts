/* eslint-disable @typescript-eslint/naming-convention */
import type { ComponentType, ReactElement } from 'react';
import type { ReactElementChildren, TextChildren } from '@vibrant-ui/core';
import type { TableColumnProps } from './TableColumn/TableColumnProps';
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
