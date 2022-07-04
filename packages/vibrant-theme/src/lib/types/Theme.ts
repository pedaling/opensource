import type { Colors, ThemeColors } from './Colors';
import type { ThemeMode } from './Mode';
import type { Opacity, ThemeOpacity } from './Opacity';
import type { ThemeTypography, ThemeTypographyWeight } from './Typography';

export type Theme = {
  breakpoints: number[];
  colors: ThemeColors;
  opacity: ThemeOpacity;
  typography: ThemeTypography;
  typographyWeight: ThemeTypographyWeight;
  mode: ThemeMode;
};

export type CurrentTheme = {
  breakpoints: number[];
  colors: Colors;
  opacity: Opacity;
  typography: ThemeTypography;
  typographyWeight: ThemeTypographyWeight;
};
