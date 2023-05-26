import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type DrawerPanelProps = {
  children: ReactElement[];
  testId?: string;
  defaultSize: number;
};

export const withDrawerPanelVariation = withVariation<DrawerPanelProps>('DrawerPanel')();
