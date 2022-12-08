import type {
  FlexboxSystemProps,
  ReactElementChildren,
  SizingSystemProps,
  TextChildren,
  TextProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import type { Either } from '@vibrant-ui/utils';

export type SortDirection = 'asc' | 'desc' | 'none';

export type TableHeaderCellProps = Either<
  {
    title?: TextChildren;
    description?: TextChildren;
    sortable?: boolean;
    defaultSortDirection?: SortDirection;
    onSort?: (sortDirection: SortDirection) => void;
  },
  {
    renderCell?: () => ReactElementChildren;
  }
> & {
  alignVertical?: 'center' | 'end' | 'start';
  alignHorizontal?: 'center' | 'end' | 'start';
} & Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'> &
  Pick<TextProps, 'lineLimit' | 'wordBreak'>;

export const withTableHeaderCellVariation = withVariation<TableHeaderCellProps>('TableHeaderCell')(
  propVariant({
    props: [
      {
        name: 'alignHorizontal',
        default: 'center',
        keep: true,
      },
    ],
    variants: {
      start: {
        textAlign: 'left' as const,
      },
      center: {
        textAlign: 'center' as const,
      },
      end: {
        textAlign: 'right' as const,
      },
    },
  })
);

export const withTableHeaderSortButtonVariation = withVariation<{
  sortDirection: SortDirection;
  onClick?: () => void;
}>('TableHeaderSortButton')(
  propVariant({
    props: [
      {
        name: 'sortDirection',
      },
    ],
    variants: {
      none: {
        SortIconComponent: Icon.Sorting.Thin,
        sortIconFill: 'onView3' as const,
      },
      desc: {
        SortIconComponent: Icon.ArrowDown.Regular,
        sortIconFill: 'onViewPrimary' as const,
      },
      asc: {
        SortIconComponent: Icon.ArrowUp.Regular,
        sortIconFill: 'onViewPrimary' as const,
      },
    },
  })
);
