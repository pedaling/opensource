import { withTableSortIconVariation } from './TableSortIconProps';

export const TableSortIcon = withTableSortIconVariation(({ SortIconComponent, sortIconFill }) => (
  <SortIconComponent size={14} fill={sortIconFill} />
));
