import type { Colors } from '../../types';
import { palettes } from '../palettes';

export const darkModeColors: Colors = {
  //Background
  background: palettes.neutral['5'],
  surface1: palettes.whiteAlpha['5'],
  surface2: palettes.neutral['10'],
  surface3: palettes.globalBlack,
  surface4: palettes.neutral['40'],

  //Background-hue
  primary: palettes.orange['60'],
  primaryContainer: palettes.orange['10'],
  informative: palettes.blue['50'],
  informativeContainer: palettes.blue['10'],
  error: palettes.red['50'],
  errorContainer: palettes.red['10'],
  success: palettes.green['50'],
  successContainer: palettes.green['10'],
  warning: palettes.yellow['75'],
  warningContainer: palettes.yellow['10'],
  inverseSurface: palettes.neutral['95'],

  //Background-RestrictedUsage
  surfaceUltraThin: `${palettes.neutral['20']}66`,
  surfaceThin: `${palettes.neutral['20']}99`,
  surfaceRegular: `${palettes.neutral['15']}bf`,
  surfaceThick: `${palettes.neutral['10']}cc`,
  surfaceOnMedia: `${palettes.neutral['50']}66`, //삭제
  disable: palettes.whiteAlpha['15'],
  dim: palettes.blackAlpha['80'],
  inverseDim: palettes.blackAlpha['20'],
  overlay: palettes.whiteAlpha['10'],
  white: palettes.globalWhite,
  black: palettes.globalBlack,
  transparent: palettes.blackAlpha['0'],

  //Foreground
  onView1: palettes.neutral['95'],
  onView2: `${palettes.neutral['95']}a6`,
  onView3: palettes.neutral['50'],
  onViewPrimary: palettes.orange['65'],
  onViewInformative: palettes.blue['60'],
  onViewError: palettes.red['60'],
  onViewSuccess: palettes.green['60'],
  onViewWarning: palettes.yellow['75'],
  onColor: '$colors.onView1',

  //Foreground-hue
  onPrimary: palettes.globalWhite,
  onPrimaryContainer: palettes.orange['65'],
  onInformative: palettes.blue['95'],
  onInformativeContainer: palettes.blue['60'],
  onError: palettes.red['95'],
  onErrorContainer: palettes.red['60'],
  onSuccess: palettes.green['95'],
  onSuccessContainer: palettes.green['60'],
  onWarning: palettes.yellow['5'],
  onWarningContainer: palettes.yellow['60'],
  onInverseSurface: palettes.neutral['5'],

  //Stroke
  outline1: palettes.whiteAlpha['8'],
  outline2: palettes.whiteAlpha['15'],
  outlineNeutral: palettes.neutral['95'],
  outlineDisable: palettes.whiteAlpha['10'],
  outlinePrimary: palettes.orange['60'],
  outlineInformative: palettes.blue['50'],
  outlineError: palettes.red['40'],
  outlineSuccess: palettes.green['50'],
  outlineWarning: palettes.yellow['75'],

  //Adaptive Color
  redInverse: palettes.red['90'],
  redContrast: palettes.red['65'],
  redVibrant: palettes.red['55'],
  redSoft: palettes.red['30'],
  redMuted: palettes.red['15'],

  orangeInverse: palettes.orange['90'],
  orangeContrast: palettes.orange['70'],
  orangeVibrant: palettes.orange['60'],
  orangeSoft: palettes.orange['30'],
  orangeMuted: palettes.orange['15'],

  yellowInverse: palettes.yellow['90'],
  yellowContrast: palettes.yellow['80'],
  yellowVibrant: palettes.yellow['75'],
  yellowSoft: palettes.yellow['30'],
  yellowMuted: palettes.yellow['15'],

  greenInverse: palettes.green['95'],
  greenContrast: palettes.green['80'],
  greenVibrant: palettes.green['65'],
  greenSoft: palettes.green['35'],
  greenMuted: palettes.green['15'],

  blueInverse: palettes.blue['90'],
  blueContrast: palettes.blue['65'],
  blueVibrant: palettes.blue['50'],
  blueSoft: palettes.blue['25'],
  blueMuted: palettes.blue['10'],

  violetInverse: palettes.violet['90'],
  violetContrast: palettes.violet['70'],
  violetVibrant: palettes.violet['55'],
  violetSoft: palettes.violet['25'],
  violetMuted: palettes.violet['10'],

  magentaInverse: palettes.magenta['90'],
  magentaContrast: palettes.magenta['65'],
  magentaVibrant: palettes.magenta['55'],
  magentaSoft: palettes.magenta['30'],
  magentaMuted: palettes.magenta['10'],
};
