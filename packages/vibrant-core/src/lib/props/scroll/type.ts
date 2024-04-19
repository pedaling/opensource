import type { ResponsiveValue } from '../../../types';

export type ScrollSystemProps = {
  scrollSnap?: ResponsiveValue<string>;
  horizontal?: ResponsiveValue<boolean>;
  hideScroll?: ResponsiveValue<boolean>;
  scrollPaddingTop?: ResponsiveValue<string>;
  scrollPaddingLeft?: ResponsiveValue<string>;
  scrollPaddingRight?: ResponsiveValue<string>;
  scrollPaddingBottom?: ResponsiveValue<string>;
};
