import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { ViewPagerTabGroupItemProps } from './ViewPagerTabGroupItem';

export type ViewPagerTabGroupProps = {
  children: (ReactElement<ViewPagerTabGroupItemProps> | undefined)[] | ReactElement<ViewPagerTabGroupItemProps>;
  tabSpacing?: number;
  tabId?: string;
  onTabChange?: (tabId?: string) => void;
  testId?: string;
  native_swipeEnabled?: boolean;
};

export const withViewPagerTabGroupVariation = withVariation<ViewPagerTabGroupProps>('ViewPagerTabGroup')();
