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
  'surfaceOnMedia',
  'disable',
  'outline1',
  'outline2',
  'outlineNeutral',
  'outlineDisable',
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
  'inverseDim',
  'overlay',
  'onColor',
  'transparent',
  'white',
  'black',
] as const;

export type ColorToken = typeof colorTokens[number];
export type BaseColorToken = Exclude<ColorToken, 'black' | 'overlay' | 'white' | `on${string}` | `outline${string}`>;
export type OnColorToken = Exclude<Extract<ColorToken, `on${string}`>, 'onColor'>;

export type Colors = {
  [color in ColorToken]: string;
};

export type ThemeColors = {
  [mode in ThemeMode]: Colors;
};

export const baseColorTokens = colorTokens.filter(
  (token): token is BaseColorToken =>
    !token.startsWith('on') &&
    !token.startsWith('outline') &&
    !['overlay', 'transparent', 'white', 'black'].includes(token)
);
export const onColorTokens = colorTokens.filter(
  (token): token is OnColorToken => token.startsWith('on') && token !== 'onColor'
);

export const BaseColorOnColorMap: { [color in BaseColorToken]: OnColorToken } = {
  primary: 'onPrimary',
  primaryContainer: 'onPrimaryContainer',
  informative: 'onInformative',
  informativeContainer: 'onInformativeContainer',
  error: 'onError',
  errorContainer: 'onErrorContainer',
  success: 'onSuccess',
  successContainer: 'onSuccessContainer',
  warning: 'onWarning',
  warningContainer: 'onWarningContainer',
  surface1: 'onView1',
  surface2: 'onView1',
  surface3: 'onView1',
  surface4: 'onView1',
  surfaceOnMedia: 'onView1',
  disable: 'onView3',
  background: 'onView1',
  inverseSurface: 'onInverseSurface',
  transparent: 'onView1',
  dim: 'onView1',
  inverseDim: 'onView1',
};
