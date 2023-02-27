import type { ReactElement } from 'react';
import type { ReactElementChildren } from '../../types';
import { withVariation } from '../withVariation';

type TabViewProps = {
  children: ReactElement<TabViewItemProps> | ReactElement<TabViewItemProps>[];
  renderTobBarItem: (title: string, isSelected: boolean, renderContent: () => void) => ReactElement;
  renderTobBarContainer: (props: ReactElementChildren) => ReactElement;
  onChangeTab?: () => void;
};

export type TabViewItemProps = {
  title: string;
  tabId: string;
  isSelected: boolean;
  onTabSelected?: () => void;
  renderContent: () => ReactElement;
};

export const withTabViewVariation = withVariation<TabViewProps>('TabView');
