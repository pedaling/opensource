import type { ResponsiveValue } from '../../../types';

export type ScrollSystemProps = {
  scrollSnap?: ResponsiveValue<string>;
  horizontal?: ResponsiveValue<boolean>;
  hideScroll?: ResponsiveValue<boolean>;
  scrollPaddingTop?: ResponsiveValue<number | string>;
  scrollPaddingLeft?: ResponsiveValue<number | string>;
  scrollPaddingRight?: ResponsiveValue<number | string>;
  scrollPaddingBottom?: ResponsiveValue<number | string>;
};
