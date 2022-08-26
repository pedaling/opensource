import type { ResponsiveValue } from '../../../types';

export type ScrollSystemProps = {
  overflowX?: ResponsiveValue<'auto' | 'hidden' | 'visible'>;
  overflowY?: ResponsiveValue<'auto' | 'hidden' | 'visible'>;
  hideScroll?: ResponsiveValue<boolean>;
};
