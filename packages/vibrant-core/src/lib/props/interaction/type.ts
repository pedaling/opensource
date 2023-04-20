import type { ResponsiveValue } from '../../../types';

export type HitSlopRect = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type InteractionSystemProps = {
  cursor?: ResponsiveValue<'default' | 'pointer' | 'text'>;
  pointerEvents?: ResponsiveValue<'auto' | 'none'>;
  hitSlop?: ResponsiveValue<HitSlopRect | number>;
  tabIndex?: -1 | 0;
};
