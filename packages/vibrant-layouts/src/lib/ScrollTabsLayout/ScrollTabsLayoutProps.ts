import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { ScrollTabPanelProps } from './ScrollTabPanel/ScrollTabPanelProps';

export type ScrollTabGroupLayoutProps = {
  header?: ReactElement;
  children: ReactElement<ScrollTabPanelProps> | ReactElement<ScrollTabPanelProps>[];
  tabSpacing?: number;
  onTabChange?: (_: { id: string; title: string }) => void;
  initialActiveTabId?: string;
  testId?: string;
};

export const withScrollTabGroupLayoutVariation = withVariation<ScrollTabGroupLayoutProps>('ScrollTabGroupLayout')();
