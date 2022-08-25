import type { ReactElement } from 'react';
import { Box, ScrollBox, propVariant, withVariation } from '@vibrant-ui/core';
import type { TabProps } from '../Tab';

export type TabGroupProps = {
  tabId: string;
  type: 'fitContent' | 'fullWidth';
  onTabChange: (tabId: string) => void;
  children: ReactElement<TabProps>[];
};

export const withTabGroupVariation = withVariation<TabGroupProps>('TabGroup')(
  propVariant({
    props: [
      {
        name: 'type',
      },
    ],
    variants: {
      fitContent: {
        tabFlexGrow: 0,
        tabFlexShrink: 0,
        tabFlexBasis: 'auto',
        BoxComponent: ScrollBox,
        width: 'auto',
      },
      fullWidth: {
        tabFlexGrow: 1,
        tabFlexShrink: 0,
        tabFlexBasis: 'auto',
        BoxComponent: Box,
        width: '100%',
      },
    } as const,
  })
);
