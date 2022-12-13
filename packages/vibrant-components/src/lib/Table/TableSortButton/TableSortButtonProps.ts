import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

export type SortDirection = 'asc' | 'desc' | 'none';

export type TableSortButtonProps = {
  sortDirection: SortDirection;
  onClick?: () => void;
};

export const withTableSortButtonVariation = withVariation<TableSortButtonProps>('TableHeaderSortButton')(
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
