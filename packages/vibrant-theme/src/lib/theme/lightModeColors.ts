import type { Colors } from '../../types';
import { palettes } from '../palettes';

export const lightModeColors: Colors = {
  //Background
  background: palettes.globalWhite,
  surface1: palettes.blackAlpha['3'],
  surface2: palettes.globalWhite,
  surface3: palettes.globalWhite,
  surface4: palettes.neutral['80'],

  //Background-hue
  primary: palettes.orange['60'],
  primaryContainer: palettes.orange['95'],
  informative: palettes.blue['50'],
  informativeContainer: palettes.blue['95'],
  error: palettes.red['50'],
  errorContainer: palettes.red['95'],
  success: palettes.green['50'],
  successContainer: palettes.green['95'],
  warning: palettes.yellow['75'],
  warningContainer: palettes.yellow['95'],
  inverseSurface: palettes.neutral['15'],

  //Background-RestrictedUsage
  surfaceUltraThin: `${palettes.neutral['90']}66`,
  surfaceThin: `${palettes.neutral['90']}99`,
  surfaceRegular: `${palettes.neutral['95']}cc`,
  surfaceThick: `${palettes.neutral['95']}f2`,
  surfaceOnMedia: `${palettes.neutral['50']}33`, //삭제
  disable: palettes.blackAlpha['10'],
  dim: palettes.blackAlpha['70'],
  inverseDim: palettes.whiteAlpha['80'],
  overlay: palettes.blackAlpha['5'],
  white: palettes.globalWhite,
  black: palettes.globalBlack,
  transparent: palettes.whiteAlpha['0'],

  //Foreground
  onView1: palettes.neutral['5'],
  onView2: `${palettes.neutral['25']}cc`,
  onView3: palettes.neutral['60'],
  onViewPrimary: palettes.orange['60'],
  onViewInformative: palettes.blue['50'],
  onViewError: palettes.red['50'],
  onViewSuccess: palettes.green['50'],
  onViewWarning: palettes.yellow['60'],
  onColor: '$colors.onView1',

  //Foreground-hue
  onPrimary: palettes.globalWhite,
  onPrimaryContainer: palettes.orange['60'],
  onInformative: palettes.globalWhite,
  onInformativeContainer: palettes.blue['55'],
  onError: palettes.globalWhite,
  onErrorContainer: palettes.red['55'],
  onSuccess: palettes.globalWhite,
  onSuccessContainer: palettes.green['55'],
  onWarning: palettes.yellow['5'],
  onWarningContainer: palettes.yellow['55'],
  onInverseSurface: palettes.neutral['95'],

  //Stroke
  outline1: palettes.blackAlpha['5'],
  outline2: palettes.blackAlpha['10'],
  outlineNeutral: palettes.neutral['5'],
  outlineDisable: palettes.blackAlpha['5'],
  outlinePrimary: palettes.orange['60'],
  outlineInformative: palettes.blue['50'],
  outlineError: palettes.red['50'],
  outlineSuccess: palettes.green['50'],
  outlineWarning: palettes.yellow['75'],

  //Adaptive Color
  redInverse: palettes.red['15'],
  redContrast: palettes.red['40'],
  redVibrant: palettes.red['50'],
  redSoft: palettes.red['80'],
  redMuted: palettes.red['90'],

  orangeInverse: palettes.orange['15'],
  orangeContrast: palettes.orange['50'],
  orangeVibrant: palettes.orange['60'],
  orangeSoft: palettes.orange['80'],
  orangeMuted: palettes.orange['90'],

  yellowInverse: palettes.yellow['15'],
  yellowContrast: palettes.yellow['55'],
  yellowVibrant: palettes.yellow['75'],
  yellowSoft: palettes.yellow['85'],
  yellowMuted: palettes.yellow['90'],

  greenInverse: palettes.green['15'],
  greenContrast: palettes.green['45'],
  greenVibrant: palettes.green['60'],
  greenSoft: palettes.green['90'],
  greenMuted: palettes.green['95'],

  blueInverse: palettes.blue['10'],
  blueContrast: palettes.blue['40'],
  blueVibrant: palettes.blue['50'],
  blueSoft: palettes.blue['80'],
  blueMuted: palettes.blue['90'],

  violetInverse: palettes.violet['10'],
  violetContrast: palettes.violet['40'],
  violetVibrant: palettes.violet['50'],
  violetSoft: palettes.violet['80'],
  violetMuted: palettes.violet['90'],

  magentaInverse: palettes.magenta['10'],
  magentaContrast: palettes.magenta['45'],
  magentaVibrant: palettes.magenta['55'],
  magentaSoft: palettes.magenta['80'],
  magentaMuted: palettes.magenta['90'],
};
