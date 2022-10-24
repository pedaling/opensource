import type { ThemeBorderRadius } from './BorderRadius';
import type { Colors, ThemeColors } from './Colors';
import type { Elevation, ThemeElevation } from './Elevation';
import type { Gradient, ThemeGradient } from './Gradient';
import type { ThemeMode } from './Mode';
import type { Opacity, ThemeOpacity } from './Opacity';
import type { ThemeTypography, ThemeTypographyWeight } from './Typography';

export type Theme = {
  breakpoints: number[];
  contentArea: {
    maxWidth: number;
    padding: number[] | number;
  };
  colors: ThemeColors;
  elevation: ThemeElevation;
  gradient: ThemeGradient;
  opacity: ThemeOpacity;
  borderRadius: ThemeBorderRadius;
  typography: ThemeTypography;
  typographyWeight: ThemeTypographyWeight;
  zIndex: {
    bottomBar: number;
    dropdown: number;
    floatingActionButton: number;
    modalBottomSheet: number;
    toast: number;
  };
  mode: ThemeMode;
};

export type CurrentTheme = {
  breakpoints: number[];
  contentArea: {
    maxWidth: number;
    padding: number[] | number;
  };
  colors: Colors;
  elevation: Elevation;
  gradient: Gradient;
  opacity: Opacity;
  borderRadius: ThemeBorderRadius;
  typography: ThemeTypography;
  typographyWeight: ThemeTypographyWeight;
  zIndex: {
    bottomBar: number;
    dropdown: number;
    floatingActionButton: number;
    modalBottomSheet: number;
    toast: number;
  };
};
