import type { ResponsiveValue } from '../../../types';

export type OverflowSystemProps = {
  overflow?: ResponsiveValue<'hidden' | 'scroll' | 'visible'>;
  overflowX?: ResponsiveValue<'hidden' | 'scroll' | 'visible'>;
  overflowY?: ResponsiveValue<'hidden' | 'scroll' | 'visible'>;
  hideScroll?: ResponsiveValue<boolean>;
};
