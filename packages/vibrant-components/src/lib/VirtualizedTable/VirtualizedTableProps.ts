import type { TableProps } from '../Table/TableProps';

export type VirtualizedTableProps<Data extends Record<string, any>, RowKey extends keyof Data> = {
  height?: number;
} & TableProps<Data, RowKey>;
