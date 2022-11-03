import type { ThemeMode } from './Mode';

export type LinearGradient = {
  type: 'linear';
  colors: string[];
  locations: number[];
  degree: number;
};

export type AnyGradient = LinearGradient;

export type Gradient = {
  linearTop: LinearGradient;
  linearBottom: LinearGradient;
  linearLeft: LinearGradient;
  linearRight: LinearGradient;
};

export type GradientKind = keyof Gradient;

export type ThemeGradient = {
  [mode in ThemeMode]: Gradient;
};
