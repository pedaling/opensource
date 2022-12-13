/* eslint-disable @typescript-eslint/naming-convention */
import type { ComponentType, ReactElement } from 'react';
import type {
  FlexboxSystemProps,
  ReactElementChild,
  ReactElementChildren,
  SizingSystemProps,
  TextChildren,
} from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { SortDirection } from './TableHeaderCell/TableHeaderCellProps';

export type UseTable<DataType extends Record<string, any>> = (_: {
  data: DataType[];
  keyField: Extract<keyof DataType, string>;
}) => {
  Table: ComponentType<TableProps<DataType>>;
};

export type TableProps<DataType extends Record<string, any>> = {
  selectable: boolean;
  selectButtons?: { text: string; onClick: (selectedRows: DataType[]) => void }[];
  renderExpanded?: (row: DataType) => ReactElementChildren;
  children: ReactElement<TableColumnProps>;
  onRow: (row: DataType) => void;
  onSort?: (dataKey: string, direction: SortDirection) => void;
  emptyText?: TextChildren;
};

export type TableColumnProps = {
  dataKey: string;
  title?: TextChildren;
  description?: TextChildren;
  alignVertical?: 'center' | 'end' | 'start';
  alignHorizontal?: 'center' | 'end' | 'start';
  sortable?: boolean;
  defaultSortDirection?: SortDirection;
  renderHeader?: () => ReactElementChild;
} & Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'>;

export const withTableColumnVariation = withVariation<TableColumnProps>('TableColumn')();
