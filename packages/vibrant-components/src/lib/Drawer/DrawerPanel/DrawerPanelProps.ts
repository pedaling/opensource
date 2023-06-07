import type { ReactElement } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type PercentWidth = `${number}%`;

export type DefaultPanelSizeType = PercentWidth | number | 'auto';

export type DrawerPanelProps = {
  children: ReactElement[];
  testId?: string;
  defaultSize?: ResponsiveValue<DefaultPanelSizeType>;
};

export const withDrawerPanelVariation = withVariation<DrawerPanelProps>('DrawerPanel')();
