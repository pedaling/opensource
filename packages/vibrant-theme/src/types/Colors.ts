import type { ThemeMode } from './Mode';

export const colorTokens = [
  'primary',
  'onPrimary',
  'primaryContainer',
  'onPrimaryContainer',
  'informative',
  'onInformative',
  'informativeContainer',
  'onInformativeContainer',
  'error',
  'onError',
  'errorContainer',
  'onErrorContainer',
  'success',
  'onSuccess',
  'successContainer',
  'onSuccessContainer',
  'warning',
  'onWarning',
  'warningContainer',
  'onWarningContainer',
  'surface1',
  'surface2',
  'surface3',
  'surface4',
  'disable',
  'outline1',
  'outline2',
  'outlineNeutral',
  'disableOutline',
  'outlinePrimary',
  'outlineInformative',
  'outlineError',
  'outlineSuccess',
  'outlineWarning',
  'onView1',
  'onView2',
  'onView3',
  'onViewPrimary',
  'onViewInformative',
  'onViewError',
  'onViewSuccess',
  'onViewWarning',
  'background',
  'inverseSurface',
  'onInverseSurface',
  'dim',
  'overlay',
  'onColor',
  'transparent',
  'white',
  'black',
] as const;

export type ColorToken = typeof colorTokens[number];
export type BaseColorToken = Exclude<ColorToken, `on${string}`>;
export type OnColorToken = Extract<ColorToken, `on${string}`>;

export type Colors = {
  [color in ColorToken]: string;
};

export type ThemeColors = {
  [mode in ThemeMode]: Colors;
};

export const baseColorTokens = colorTokens.filter((token): token is BaseColorToken => !token.startsWith('on'));
export const onColorTokens = colorTokens.filter((token): token is OnColorToken => token.startsWith('on'));
