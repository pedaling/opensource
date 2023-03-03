import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { ViewPagerTabGroupItemProps } from './ViewPagerTabGroupItem';

export type ViewPagerTabGroupProps = {
  children: ReactElement<ViewPagerTabGroupItemProps> | ReactElement<ViewPagerTabGroupItemProps>[];
  tabSpacing?: number;
  onTabChange?: () => void;
  testId?: string;
};

export const withViewPagerTabGroupVariation = withVariation<ViewPagerTabGroupProps>('ViewPagerTabGroup')();
