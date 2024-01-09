import type { ResponsiveValue } from '../../../types';

export type ScrollSystemProps = {
  scrollSnap?: ResponsiveValue<string>;
  scrollSnapStop?: ResponsiveValue<string>;
  horizontal?: ResponsiveValue<boolean>;
  hideScroll?: ResponsiveValue<boolean>;
};
