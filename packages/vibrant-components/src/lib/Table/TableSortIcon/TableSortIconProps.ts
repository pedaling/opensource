import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

export type SortDirection = 'asc' | 'desc' | 'none';

export type TableSortIconProps = {
  as?: string;
  sortDirection: SortDirection;
  onClick?: () => void;
};

export const withTableSortIconVariation = withVariation<TableSortIconProps>('TableHeaderSortButton')(
  propVariant({
    props: [
      {
        name: 'sortDirection',
      },
    ],
    variants: {
      none: {
        SortIconComponent: Icon.Sorting.Thin,
        sortIconFill: 'onView3',
      },
      desc: {
        SortIconComponent: Icon.ArrowDown.Regular,
        sortIconFill: 'onViewPrimary',
      },
      asc: {
        SortIconComponent: Icon.ArrowUp.Regular,
        sortIconFill: 'onViewPrimary',
      },
    } as const,
  })
);
