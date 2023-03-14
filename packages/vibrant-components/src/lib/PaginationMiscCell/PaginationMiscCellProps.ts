import type { Ref } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type PaginationMiscCellProps = {
  ref: Ref<any>;
  page: number;
  onClick: (page: number) => void;
  selected?: boolean;
  testId?: string;
};

export const withPaginationMiscCellVariation = withVariation<PaginationMiscCellProps>('PaginationMiscCell')(
  propVariant({
    props: [
      {
        name: 'selected',
        default: false,
      },
    ],
    variants: {
      true: {
        backgroundColor: 'primary',
        overlayColor: 'onPrimary',
      },
      false: {
        backgroundColor: 'background',
        overlayColor: 'onView1',
      },
    } as const,
  })
);
