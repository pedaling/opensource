import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type ScrollTabPanelProps = {
  title: string;
  tabId: string;
  onTabSelected?: () => void;
  children: ReactElement;
  testId?: string;
};
export const withScrollTabPanelVariation = withVariation<ScrollTabPanelProps>('ScrollTabPanel')();
