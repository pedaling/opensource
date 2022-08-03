import type { ResponsiveValue } from '../../../types';

export type PositionProps = {
  position?: ResponsiveValue<'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'>;
  top?: ResponsiveValue<number | string>;
  right?: ResponsiveValue<number | string>;
  bottom?: ResponsiveValue<number | string>;
  left?: ResponsiveValue<number | string>;
  zIndex?: ResponsiveValue<number>;
};
