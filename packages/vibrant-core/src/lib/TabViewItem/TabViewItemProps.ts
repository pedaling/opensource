import type { ReactElement } from 'react';
import { withVariation } from '../withVariation';

export type TabViewItemProps = {
  title: string;
  tabId: string;
  onTabSelected?: () => void;
  renderContent: () => ReactElement;
};

export const withTabViewItemVariation = withVariation<TabViewItemProps>('TabViewItem')();
