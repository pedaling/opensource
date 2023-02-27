import type { ReactElement } from 'react';
import type { ReactElementChildren } from '../../types';
import type { TabViewItemProps } from '../TabViewItem';
import { withVariation } from '../withVariation';

type TabViewProps = {
  children: ReactElement<TabViewItemProps> | ReactElement<TabViewItemProps>[];
  renderTabViewItem: (title: string, isSelected: boolean, renderContent: () => void) => ReactElement;
  renderTabViewContainer: (props: ReactElementChildren) => ReactElement;
  onChangeTab?: () => void;
};

export const withTabViewVariation = withVariation<TabViewProps>('TabView');
