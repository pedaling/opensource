import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { ViewPagerTabGroupItemProps } from '../ViewPagerTabGroupItem';

type ViewPagerTabGroup = {
  children: ReactElement<ViewPagerTabGroupItemProps> | ReactElement<ViewPagerTabGroupItemProps>[];
  tabSpacing?: number;
  onChangeTab?: () => void;
};

export const withViewPagerTabGroupVariation = withVariation<ViewPagerTabGroup>('ViewPagerTabGroup')();
