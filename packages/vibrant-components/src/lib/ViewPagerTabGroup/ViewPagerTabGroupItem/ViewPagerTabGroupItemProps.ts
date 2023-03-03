import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type ViewPagerTabGroupItemProps = {
  title: string;
  tabId: string;
  onTabSelected?: () => void;
  renderContent: () => ReactElement;
  testId?: string;
};
export const withViewPagerTabGroupItemVariation = withVariation<ViewPagerTabGroupItemProps>('ViewPagerTabGroupItem')();
