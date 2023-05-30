import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type ScrollTabsHeaderProps = {
  children: ReactElementChild;
};

export const withScrollTabsHeaderVariation = withVariation<ScrollTabsHeaderProps>('ScrollTabsHeader')();
