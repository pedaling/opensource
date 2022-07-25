import type { Path } from '@vibrant-ui/utils';
import type { ThemeMode } from './Mode';

export type LinearGradient = {
  type: 'linear';
  colors: string[];
  locations: number[];
  degree: number;
};

export type AnyGradient = LinearGradient;

export type Gradient = {
  linear: {
    top: LinearGradient;
    bottom: LinearGradient;
  };
};

export type GradientKind = Extract<Path<Gradient>, 'linear.top' | 'linear.bottom'>;

export type ThemeGradient = {
  [mode in ThemeMode]: Gradient;
};
