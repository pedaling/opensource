import type { ResponsiveValue } from '../../../types';

export type PositionSystemProps = {
  position?: ResponsiveValue<'absolute' | 'relative'>;
  top?: ResponsiveValue<number | string>;
  right?: ResponsiveValue<number | string>;
  bottom?: ResponsiveValue<number | string>;
  left?: ResponsiveValue<number | string>;
  zIndex?: ResponsiveValue<number>;
};
