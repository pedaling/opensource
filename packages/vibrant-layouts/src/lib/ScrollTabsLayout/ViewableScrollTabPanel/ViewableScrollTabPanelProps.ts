import type { RefCallback } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type ViewableScrollTabPanelProps = {
  ref: RefCallback<HTMLElement>;
  offsetTop: number;
  onViewableChange: (viewable: boolean) => void;
  children: ReactElementChild;
};
export const withViewableScrollTabPanelVariation = withVariation<ViewableScrollTabPanelProps>('ScrollTabPanel')();
