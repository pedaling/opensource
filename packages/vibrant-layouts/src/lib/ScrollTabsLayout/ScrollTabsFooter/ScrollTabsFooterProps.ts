import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type ScrollTabsFooterProps = {
  children: ReactElementChild;
};

export const withScrollTabsFooterVariation = withVariation<ScrollTabsFooterProps>('ScrollTabsFooter')();
