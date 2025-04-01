/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TableProps } from '@vibrant-ui/components';

type BaseProps<Data extends Record<string, any>, RowKey extends keyof Data> = {
  height?: number;
} & TableProps<Data, RowKey>;

type OnlyMultiSelect<Data extends Record<string, any>, RowKey extends keyof Data> = {
  multiCellSelectable: boolean;
  onRow?: never;
} & BaseProps<Data, RowKey>;

type OnlyOnRow<Data extends Record<string, any>, RowKey extends keyof Data> = {
  onRow: {
    onClick: (row: Data) => void;
  };
  multiCellSelectable?: never;
} & BaseProps<Data, RowKey>;

type Neither<Data extends Record<string, any>, RowKey extends keyof Data> = {
  multiCellSelectable?: never;
  onRow?: never;
} & BaseProps<Data, RowKey>;

export type VirtualizedTableProps<Data extends Record<string, any>, RowKey extends keyof Data> =
  | Neither<Data, RowKey>
  | OnlyMultiSelect<Data, RowKey>
  | OnlyOnRow<Data, RowKey>;
