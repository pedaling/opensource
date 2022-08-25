import type { ResponsiveValue } from '../../../types';

export type OverflowSystemProps = {
  overflow?: ResponsiveValue<'auto' | 'hidden' | 'scroll' | 'visible'>;
  hideScroll?: ResponsiveValue<boolean>;
};
