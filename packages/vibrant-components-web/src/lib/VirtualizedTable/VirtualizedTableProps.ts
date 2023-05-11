import type { TableProps } from '@vibrant-ui/components';

export type VirtualizedTableProps<Data extends Record<string, any>, RowKey extends keyof Data> = {
  height?: number;
} & TableProps<Data, RowKey>;
