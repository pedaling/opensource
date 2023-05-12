import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type ScrollTabGroupLayoutItemProps = {
  title: string;
  tabId: string;
  onTabSelected?: () => void;
  renderContent: () => ReactElement;
  testId?: string;
};
export const withScrollTabGroupLayoutItemVariation =
  withVariation<ScrollTabGroupLayoutItemProps>('ScrollTabGroupLayoutItem')();
