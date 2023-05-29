import type { ReactElement } from 'react';
import { Box, ScrollBox, propVariant, withVariation } from '@vibrant-ui/core';
import type { ScrollTabPanelProps } from './ScrollTabPanel/ScrollTabPanelProps';
import type { ScrollTabsHeaderProps } from './ScrollTabsHeader/ScrollTabsHeaderProps';

export type ScrollTabsLayoutProps = {
  type?: 'fitContent' | 'fullWidth';
  children:
    | (ReactElement<ScrollTabPanelProps | ScrollTabsHeaderProps> | boolean | null)[]
    | ReactElement<ScrollTabPanelProps | ScrollTabsHeaderProps>;
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
        tabsHideScroll: true,
      },
      fullWidth: {
        tabFlexGrow: 1,
        tabFlexShrink: 0,
        TabsComponent: Box,
        tabOverflow: 'hidden',
        tabsScrollHorizontal: undefined,
        tabsHideScroll: undefined,
      },
    } as const,
  })
);
