import type { ForwardedRef } from 'react';
import type { DisplaySystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type TabProps = Pick<DisplaySystemProps, 'hidden'> & {
  title: string;
  active?: boolean;
  update?: boolean;
  id: string;
  description?: string;
  onClick?: (id: string) => void;
  ref?: ForwardedRef<HTMLButtonElement>;
};

export const withTabVariation = withVariation<TabProps>('Tab')(
  propVariant({
    props: [
      {
        name: 'active',
        default: false,
      },
    ],
    variants: {
      true: {
        borderBottomColor: 'outlineNeutral',
        textColor: 'onView1',
      },
      false: {
        borderBottomColor: 'rgba(0, 0, 0, 0)',
        textColor: 'onView2',
      },
    } as const,
  })
);
