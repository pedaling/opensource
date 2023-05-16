import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type ScrollTabPanelProps = {
  title: string;
  tabId: string;
  children: ReactElementChild;
};
export const withScrollTabPanelVariation = withVariation<ScrollTabPanelProps>('ScrollTabPanel')();
