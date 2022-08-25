import type { ResponsiveValue } from '../../../types';

export type OverflowSystemProps = {
  overflow?: ResponsiveValue<'hidden' | 'scroll' | 'visible'>;
  hideScroll?: ResponsiveValue<boolean>;
  alwaysShowScroll?: ResponsiveValue<boolean>;
};
