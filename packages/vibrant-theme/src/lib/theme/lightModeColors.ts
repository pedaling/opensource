import type { Colors } from '../../types';
import { palettes } from '../palettes';

export const lightModeColors: Colors = {
  white: palettes.globalWhite,
  black: palettes.globalBlack,
  transparent: palettes.transparent,
  redInverse: palettes.red['15'],
  redContrast: palettes.red['35'],
  redVibrant: palettes.red['50'],
  redMuted: palettes.red['90'],
  orangeInverse: palettes.orange['15'],
  orangeContrast: palettes.orange['40'],
  orangeVibrant: palettes.orange['60'],
  orangeMuted: palettes.orange['90'],
  yellowInverse: palettes.yellow['15'],
  yellowContrast: palettes.yellow['45'],
  yellowVibrant: palettes.yellow['70'],
  yellowMuted: palettes.yellow['90'],
  greenInverse: palettes.green['15'],
  greenContrast: palettes.green['40'],
  greenVibrant: palettes.green['60'],
  greenMuted: palettes.green['95'],
  violetInverse: palettes.violet['10'],
  violetContrast: palettes.violet['35'],
  violetVibrant: palettes.violet['50'],
  violetMuted: palettes.violet['90'],
  blueInverse: palettes.blue['10'],
  blueContrast: palettes.blue['35'],
  blueVibrant: palettes.blue['50'],
  blueMuted: palettes.blue['90'],
  magentaInverse: palettes.magenta['10'],
  magentaContrast: palettes.magenta['40'],
  magentaVibrant: palettes.magenta['55'],
  magentaMuted: palettes.magenta['90'],
  primary: palettes.orange['60'],
  onPrimary: palettes.globalWhite,
  primaryContainer: palettes.orange['95'],
  onPrimaryContainer: palettes.orange['60'],
  informative: palettes.blue['50'],
  onInformative: palettes.globalWhite,
  informativeContainer: palettes.blue['95'],
  onInformativeContainer: palettes.blue['55'],
  error: palettes.red['50'],
  onError: palettes.globalWhite,
  errorContainer: palettes.red['95'],
  onErrorContainer: palettes.red['55'],
  success: palettes.green['50'],
  onSuccess: palettes.globalWhite,
  successContainer: palettes.green['95'],
  onSuccessContainer: palettes.green['55'],
  warning: palettes.yellow['75'],
  onWarning: palettes.yellow['5'],
  warningContainer: palettes.yellow['95'],
  onWarningContainer: palettes.yellow['55'],
  surface1: palettes.blackAlpha['3'],
  surface2: palettes.globalWhite,
  surface3: palettes.globalWhite,
  surface4: palettes.neutral['80'],
  surfaceUltraThin: `${palettes.neutral['90']}66`,
  surfaceThin: `${palettes.neutral['90']}99`,
  surfaceRegular: `${palettes.neutral['95']}cc`,
  surfaceThick: `${palettes.neutral['95']}f2`,
  surfaceOnMedia: `${palettes.neutral['50']}33`,
  disable: palettes.blackAlpha['10'],
  outline1: palettes.blackAlpha['5'],
  outline2: palettes.blackAlpha['10'],
  outlineNeutral: palettes.neutral['5'],
  outlineDisable: palettes.blackAlpha['5'],
  outlinePrimary: palettes.orange['60'],
  outlineInformative: palettes.blue['50'],
  outlineError: palettes.red['50'],
  outlineSuccess: palettes.green['50'],
  outlineWarning: palettes.yellow['75'],
  onView1: palettes.neutral['5'],
  onView2: `${palettes.neutral['25']}cc`,
  onView3: palettes.neutral['60'],
  onViewPrimary: palettes.orange['65'],
  onViewInformative: palettes.blue['55'],
  onViewError: palettes.red['55'],
  onViewSuccess: palettes.green['55'],
  onViewWarning: palettes.yellow['65'],
  background: palettes.globalWhite,
  inverseSurface: palettes.neutral['15'],
  onInverseSurface: palettes.neutral['95'],
  dim: palettes.blackAlpha['70'],
  inverseDim: palettes.whiteAlpha['80'],
  overlay: palettes.blackAlpha['5'],
  onColor: '$colors.onView1',
};
