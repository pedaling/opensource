import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { ScrollTabGroupLayoutItemProps } from './ScrollTabGroupLayoutItem/ScrollTabGroupLayoutItemProps';

export type ScrollTabGroupLayoutProps = {
  header?: ReactElement;
  children: ReactElement<ScrollTabGroupLayoutItemProps> | ReactElement<ScrollTabGroupLayoutItemProps>[];
  tabSpacing?: number;
  onTabChange?: () => void;
  initialActiveTabId?: string;
  testId?: string;
};

export const withScrollTabGroupLayoutVariation = withVariation<ScrollTabGroupLayoutProps>('ScrollTabGroupLayout')();
