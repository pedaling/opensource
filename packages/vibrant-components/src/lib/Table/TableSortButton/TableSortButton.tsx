import { Pressable } from '../../Pressable';
import { withTableSortButtonVariation } from './TableSortButtonProps';

export const TableSortButton = withTableSortButtonVariation(({ onClick, SortIconComponent, sortIconFill }) => (
  <Pressable onClick={onClick} flexShrink={0}>
    <SortIconComponent size={14} fill={sortIconFill} />
  </Pressable>
));
