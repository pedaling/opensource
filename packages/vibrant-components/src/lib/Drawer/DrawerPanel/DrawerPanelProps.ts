import type { ReactElement } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type DrawerPanelProps = {
  children: ReactElement[];
  testId?: string;
  defaultSize: ResponsiveValue<number>;
};

export const withDrawerPanelVariation = withVariation<DrawerPanelProps>('DrawerPanel')();
