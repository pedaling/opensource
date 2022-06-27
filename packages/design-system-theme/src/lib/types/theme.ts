import type { Colors, ThemeColors } from './colors';
import type { ThemeMode } from './mode';
import type { Opacity, ThemeOpacity } from './opacity';

export type Theme = {
  breakpoints: number[];
  colors: ThemeColors;
  opacity: ThemeOpacity;
  mode: ThemeMode;
};

export type CurrentTheme = {
  breakpoints: number[];
  colors: Colors;
  opacity: Opacity;
};
