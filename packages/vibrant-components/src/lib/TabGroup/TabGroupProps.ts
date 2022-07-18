import type { ReactElement } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { TabProps } from '../Tab';

export type TabGroupProps = {
  tabId: string;
  type: 'fullWidth' | 'fitContent';
  onTabChange: (tabId: string) => void;
  children: ReactElement<TabProps>[];
};

export const withTabGroupVariation = withVariation<TabGroupProps>()(
  propVariant({
    props: [
      {
        name: 'type',
      },
    ],
    variants: {
      fitContent: {
        tabFlex: '0 0 auto',
        overflowX: 'scroll',
        width: 'auto',
      },
      fullWidth: {
        tabFlex: 1,
        overflowX: 'hidden',
        width: '100%',
      },
    } as const,
  })
);
