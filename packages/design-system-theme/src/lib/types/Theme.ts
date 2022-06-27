import type { Colors, ThemeColors } from './Colors';
import type { ThemeMode } from './Mode';
import type { Opacity, ThemeOpacity } from './Opacity';

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
