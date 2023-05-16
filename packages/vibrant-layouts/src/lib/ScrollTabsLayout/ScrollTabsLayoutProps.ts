import type { ReactElement } from 'react';
import { Box, ScrollBox, propVariant, withVariation } from '@vibrant-ui/core';
import type { ScrollTabPanelProps } from './ScrollTabPanel/ScrollTabPanelProps';

export type ScrollTabsLayoutProps = {
  type?: 'fitContent' | 'fullWidth';
  header?: ReactElement;
  children: (ReactElement<ScrollTabPanelProps> | boolean | null)[] | ReactElement<ScrollTabPanelProps>;
  onTabChange?: (_: { id: string; title: string }) => void;
  testId?: string;
};

export const withScrollTabsLayoutVariation = withVariation<ScrollTabsLayoutProps>('ScrollTabGroupLayout')(
  propVariant({
    props: [
      {
        name: 'type',
        default: 'fitContent',
      },
    ],
    variants: {
      fitContent: {
        tabFlexGrow: 0,
        tabFlexShrink: 0,
        TabsComponent: ScrollBox,
        tabOverflow: undefined,
        tabsScrollHorizontal: true,
      },
      fullWidth: {
        tabFlexGrow: 1,
        tabFlexShrink: 0,
        TabsComponent: Box,
        tabOverflow: 'hidden',
        tabsScrollHorizontal: undefined,
      },
    } as const,
  })
);
