import type {
  FlexboxSystemProps,
  ReactElementChildren,
  SizingSystemProps,
  TextChildren,
  TextProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

export type TableHeaderCellProps = {
  title?: TextChildren;
  description?: TextChildren;
  alignVertical?: 'center' | 'end' | 'start';
  alignHorizontal?: 'center' | 'end' | 'start';
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | 'none';
  renderCell?: () => ReactElementChildren;
} & Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'> &
  Pick<TextProps, 'lineLimit' | 'wordBreak'>;

export const withTableHeaderCellVariation = withVariation<TableHeaderCellProps>('TableHeaderCell')(
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
