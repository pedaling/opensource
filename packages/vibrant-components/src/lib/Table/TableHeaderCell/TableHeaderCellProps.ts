import type {
  FlexboxSystemProps,
  ReactElementChildren,
  SizingSystemProps,
  TextChildren,
  TextProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { SortDirection } from '../TableSortButton';

export type TableHeaderCellProps = {
  title?: TextChildren;
  description?: TextChildren;
  sortable?: boolean;
  defaultSortDirection?: SortDirection;
  onSort?: (sortDirection: SortDirection) => void;
  renderCell?: () => ReactElementChildren;
  bottomBordered?: boolean;
  alignVertical?: 'center' | 'flex-end' | 'flex-start';
  alignHorizontal?: 'center' | 'flex-end' | 'flex-start';
} & Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'> &
  Pick<TextProps, 'lineLimit' | 'textAlign' | 'wordBreak'>;

export const withTableHeaderCellVariation = withVariation<TableHeaderCellProps>('TableHeaderCell')(
  propVariant({
    props: [
      {
        name: 'bottomBordered',
      },
    ],
    variants: {
      true: {
        borderBottomColor: 'outline1',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
      },
      false: {
        borderBottomColor: undefined,
        borderBottomWidth: 0,
        borderBottomStyle: undefined,
      },
    } as const,
  })
);
