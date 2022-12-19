import type {
  FlexboxSystemProps,
  ReactElementChildren,
  SizingSystemProps,
  TextChildren,
  TextProps,
} from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { SortDirection } from '../TableSortButton';

export type TableHeaderCellProps = {
  title?: TextChildren;
  description?: TextChildren;
  sortable?: boolean;
  defaultSortDirection?: SortDirection;
  onSort?: (sortDirection: SortDirection) => void;
  renderCell?: () => ReactElementChildren;
  alignVertical?: 'center' | 'flex-end' | 'flex-start';
  alignHorizontal?: 'center' | 'flex-end' | 'flex-start';
} & Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'> &
  Pick<TextProps, 'lineLimit' | 'textAlign' | 'wordBreak'>;

export const withTableHeaderCellVariation = withVariation<TableHeaderCellProps>('TableHeaderCell')();
