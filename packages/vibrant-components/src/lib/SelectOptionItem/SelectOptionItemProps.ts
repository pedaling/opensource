import type { ReactElement } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';

type SelectOptionItemProps = {
  children: string | ReactElement;
  onClick: () => void;
  active?: boolean;
};

export const withSelectOptionItemVariation = withVariation<SelectOptionItemProps>()(
  propVariant({
    props: [
      {
        name: 'active',
        default: false,
      },
    ],
    variants: {
      true: {
        pseudoBefore: {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'onView1',
          opacity: 0.1,
        },
      },
      false: {},
    } as const,
  })
);
