import type { TableColumnProps } from './TableColumnProps';

export const TableColumn = <Data extends Record<string, any>>(_: TableColumnProps<Data>) => null;

TableColumn.displayName = 'TableColumn';
