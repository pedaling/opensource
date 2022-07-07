import type { ResponsiveValue } from '../../types';

export type PositionProps = {
  position?: ResponsiveValue<'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'>;
  top?: ResponsiveValue<string | number>;
  right?: ResponsiveValue<string | number>;
  bottom?: ResponsiveValue<string | number>;
  left?: ResponsiveValue<string | number>;
  zIndex?: ResponsiveValue<number>;
};
