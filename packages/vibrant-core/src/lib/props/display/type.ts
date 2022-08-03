import type { OpacityToken } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type DisplayProps = {
  display?: ResponsiveValue<'flex' | 'inline-flex' | 'none'>;
  visibility?: ResponsiveValue<'collapse' | 'hidden' | 'visible'>;
  opacity?: ResponsiveValue<OpacityToken | number>;
  hidden?: ResponsiveValue<boolean>;
  overflowX?: ResponsiveValue<'hidden' | 'scroll' | 'visible'>;
  overflowY?: ResponsiveValue<'hidden' | 'scroll' | 'visible'>;
  hideScroll?: ResponsiveValue<boolean>;
  hideInputSpinButton?: ResponsiveValue<boolean>;
};
