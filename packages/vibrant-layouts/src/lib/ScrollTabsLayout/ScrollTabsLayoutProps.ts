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
        flexGrow: 0,
        flexShrink: 0,
        TabsContainerComponent: ScrollBox,
        hideScroll: true,
        horizontal: true,
      },
      fullWidth: {
        flexGrow: 1,
        flexShrink: 0,
        overflow: 'hidden',
        TabsContainerComponent: Box,
      },
    } as const,
  })
);
