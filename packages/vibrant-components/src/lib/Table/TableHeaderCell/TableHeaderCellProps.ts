import type {
  FlexboxSystemProps,
  ReactElementChild,
  ReactElementChildren,
  SizingSystemProps,
  TextChildren,
  TextProps,
} from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { SortDirection } from '../TableSortButton';

export type TableHeaderCellProps = {
  title?: TextChildren;
  description?: ReactElementChild | string;
  sortable?: boolean;
  defaultSortDirection?: SortDirection;
  onSort?: (sortDirection: SortDirection) => void;
  renderCell?: () => ReactElementChildren;
  alignVertical?: 'center' | 'end' | 'start';
  alignHorizontal?: 'center' | 'end' | 'start';
} & Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<SizingSystemProps, 'minWidth' | 'width'> &
  Pick<TextProps, 'lineLimit' | 'overflowWrap' | 'whiteSpace' | 'wordBreak'>;

export const withTableHeaderCellVariation = withVariation<TableHeaderCellProps>('TableHeaderCell')();
