import type { ReactElement, Ref } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';

type SelectOptionItemProps = {
  children: ReactElement | string;
  onClick: () => void;
  active?: boolean;
  ref?: Ref<HTMLElement>;
  disabled?: boolean;
};

export const withSelectOptionItemVariation = withVariation<SelectOptionItemProps>('SelectOptionItem')(
  propVariant({
    props: [
      {
        name: 'disabled',
        keep: true,
        default: false,
      },
    ],
    variants: {
      true: {
        backgroundColor: 'disable',
        color: 'onView3',
      },
      false: {
        backgroundColor: 'surface3',
        color: 'onView1',
      },
    } as const,
  })
);
