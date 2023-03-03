import type { ReactElement } from 'react';
import type { ReactElementChildren } from '../../types';
import type { TabViewItemProps } from '../TabViewItem';
import { withVariation } from '../withVariation';

type TabViewProps = {
  children: ReactElement<TabViewItemProps> | ReactElement<TabViewItemProps>[];
  renderTobBarItem: (_: { title: string; isSelected: boolean; onClick: () => void; tabId: string }) => ReactElement;
  renderTobBarContainer: (props: ReactElementChildren) => ReactElement;
  onTabChange?: () => void;
  testId?: string;
};

export const withTabViewVariation = withVariation<TabViewProps>('TabView')();
