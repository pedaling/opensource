import type { ThemeMode } from './Mode';

export const colorTokens = [
  'redInverse',
  'redContrast',
  'redVibrant',
  'redSoft',
  'redMuted',
  'orangeInverse',
  'orangeContrast',
  'orangeVibrant',
  'orangeSoft',
  'orangeMuted',
  'yellowInverse',
  'yellowContrast',
  'yellowVibrant',
  'yellowSoft',
  'yellowMuted',
  'greenInverse',
  'greenContrast',
  'greenVibrant',
  'greenSoft',
  'greenMuted',
  'violetInverse',
  'violetContrast',
  'violetVibrant',
  'violetSoft',
  'violetMuted',
  'blueInverse',
  'blueContrast',
  'blueVibrant',
  'blueMuted',
  'blueSoft',
  'magentaInverse',
  'magentaContrast',
  'magentaVibrant',
  'magentaSoft',
  'magentaMuted',
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
  'surfaceUltraThin',
  'surfaceThin',
  'surfaceRegular',
  'surfaceThick',
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
  //Background
  background: 'onView1',
  surface1: 'onView1',
  surface2: 'onView1',
  surface3: 'onView1',
  surface4: 'onView1',

  //Background-hue
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
  inverseSurface: 'onInverseSurface',

  //Background-RestrictedUsage
  surfaceUltraThin: 'onView1',
  surfaceThin: 'onView1',
  surfaceRegular: 'onView1',
  surfaceThick: 'onView1',
  surfaceOnMedia: 'onView1', //삭제
  disable: 'onView3',
  dim: 'onView1',
  inverseDim: 'onView1',
  transparent: 'onView1',

  //Adaptive Color
  redInverse: 'onInverseSurface',
  redContrast: 'onView1',
  redVibrant: 'onView1',
  redSoft: 'onView1',
  redMuted: 'onView1',

  orangeInverse: 'onInverseSurface',
  orangeContrast: 'onView1',
  orangeVibrant: 'onView1',
  orangeSoft: 'onView1',
  orangeMuted: 'onView1',

  yellowInverse: 'onInverseSurface',
  yellowContrast: 'onView1',
  yellowVibrant: 'onView1',
  yellowSoft: 'onView1',
  yellowMuted: 'onView1',

  greenInverse: 'onInverseSurface',
  greenContrast: 'onView1',
  greenVibrant: 'onView1',
  greenSoft: 'onView1',
  greenMuted: 'onView1',

  blueInverse: 'onInverseSurface',
  blueContrast: 'onView1',
  blueVibrant: 'onView1',
  blueSoft: 'onView1',
  blueMuted: 'onView1',

  violetInverse: 'onInverseSurface',
  violetContrast: 'onView1',
  violetVibrant: 'onView1',
  violetSoft: 'onView1',
  violetMuted: 'onView1',

  magentaInverse: 'onInverseSurface',
  magentaContrast: 'onView1',
  magentaVibrant: 'onView1',
  magentaSoft: 'onView1',
  magentaMuted: 'onView1',
};
