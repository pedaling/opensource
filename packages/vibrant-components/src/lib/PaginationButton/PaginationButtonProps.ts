import type { Ref } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';

export type PaginationButtonProps = {
  ref: Ref<any>;
  type: 'next' | 'prev';
  onClick: () => void;
  disabled?: boolean;
  children?: never;
};

export const withPaginationButtonVariation = withVariation<PaginationButtonProps>('PaginationButton')(
  propVariant({
    props: [
      {
        name: 'type',
      },
    ],
    variants: {
      prev: {
        IconComponent: Icon.ChevronLeft.Regular,
      },
      next: {
        IconComponent: Icon.ChevronRight.Regular,
      },
    },
  }),
  propVariant({
    props: [
      {
        name: 'disabled',
        default: false,
      },
    ],
    variants: {
      true: {
        onColor: 'disable',
      },
      false: {
        onColor: 'onView1',
      },
    } as const,
  })
);
