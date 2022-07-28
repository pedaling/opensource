import type { ThemeBorderRadius } from './BorderRadius';
import type { Colors, ThemeColors } from './Colors';
import type { ThemeGradient } from './Gradient';
import type { ThemeMode } from './Mode';
import type { Opacity, ThemeOpacity } from './Opacity';
import type { ThemeTypography, ThemeTypographyWeight } from './Typography';

export type Theme = {
  breakpoints: number[];
  colors: ThemeColors;
  opacity: ThemeOpacity;
  gradient: ThemeGradient;
  borderRadius: ThemeBorderRadius;
  typography: ThemeTypography;
  typographyWeight: ThemeTypographyWeight;
  mode: ThemeMode;
};

export type CurrentTheme = {
  breakpoints: number[];
  colors: Colors;
  opacity: Opacity;
  borderRadius: ThemeBorderRadius;
  typography: ThemeTypography;
  typographyWeight: ThemeTypographyWeight;
};
