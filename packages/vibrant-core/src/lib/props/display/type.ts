import type { ResponsiveValue } from '../../types';

export type DisplayProps = {
  display?: ResponsiveValue<'flex' | 'inline-flex' | 'none'>;
  visibility?: ResponsiveValue<'collapse' | 'hidden' | 'visible'>;
  opacity?: ResponsiveValue<number>;
  hidden?: ResponsiveValue<boolean>;
  overflowX?: ResponsiveValue<'visible' | 'hidden' | 'scroll'>;
  overflowY?: ResponsiveValue<'visible' | 'hidden' | 'scroll'>;
  hideScroll?: ResponsiveValue<boolean>;
  hideInputSpinButton?: ResponsiveValue<boolean>;
};
