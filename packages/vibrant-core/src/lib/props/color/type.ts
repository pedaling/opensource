import type { GradientKind, LinearGradient } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type ColorSystemProps = {
  color?: ResponsiveValue<string>;
  fill?: ResponsiveValue<string>;
  stroke?: ResponsiveValue<string>;
  gradient?: ResponsiveValue<GradientKind>;
  linearGradient?: ResponsiveValue<Omit<LinearGradient, 'type'>>;
};
