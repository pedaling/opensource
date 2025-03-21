/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import type { ComponentType, ReactElement } from 'react';
import type { ReactElementChild, TextChildren } from '@vibrant-ui/core';
import type { TableColumnProps } from './TableColumn/TableColumnProps';
import type { SortDirection } from './TableSortIcon';

export type UseTableResult<Data extends Record<string, any>, RowKey extends keyof Data> = {
  Table: ComponentType<TableProps<Data, RowKey>> & {
    Column: ComponentType<TableColumnProps<Data>>;
  };
};

export type TableSortBy<Data> = { dataKey?: keyof Data; direction: SortDirection };

type TableCellRangeElement = { rowIdx: number; colIdx: number };
export type TableCellRange = { cursor: TableCellRangeElement; anchor: TableCellRangeElement };

export type TableProps<Data extends Record<string, any>, RowKey extends keyof Data> = {
  data: Data[];
  rowKey: RowKey;
  loading?: boolean;
  selectable?: boolean;
  multiCellSelectable?: boolean;
  selectButtons?: { text: string; onClick: (selectedRows: Data[]) => void }[];
  onSelectionChange?: (selectedRowKeys: Data[RowKey][]) => void;
  renderExpanded?: (row: Data) => ReactElementChild;
  children: (ReactElement<TableColumnProps<Data>> | ReactElement<TableColumnProps<Data>>[] | boolean | null)[];
  onRow?: {
    onClick: (row: Data) => void;
  };
  onSort?: (sortBy: TableSortBy<Data>) => void;
  emptyText?: TextChildren;
  emptyImage?: string;
  disabledRowKeys?: Data[RowKey][];
  expandedRowKeys?: Data[RowKey][];
  tableLayout?: 'auto' | 'fixed';
  testId?: string;
};
