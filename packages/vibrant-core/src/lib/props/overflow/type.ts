import type { ResponsiveValue } from '../../../types';

export type OverflowProps = {
  overflowX?: ResponsiveValue<'hidden' | 'scroll' | 'visible'>;
  overflowY?: ResponsiveValue<'hidden' | 'scroll' | 'visible'>;
  hideScroll?: ResponsiveValue<boolean>;
};
