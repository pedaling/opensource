import { withTableSortIconVariation } from './TableSortIconProps';

export const TableSortIcon = withTableSortIconVariation(({ onClick, SortIconComponent, sortIconFill }) => (
  <SortIconComponent size={14} fill={sortIconFill} />
));
