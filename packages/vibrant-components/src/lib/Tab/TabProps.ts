import type { RefObject } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type TabProps = {
  title: string;
  active?: boolean;
  update?: boolean;
  id: string;
  description?: string;
  onClick?: (id: string) => void;
  ref?: RefObject<HTMLButtonElement>;
  display?: ResponsiveValue<'flex' | 'none'>;
};

export const withTabVariation = withVariation<TabProps>()(
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
