import type { Colors } from '../../types';
import { palettes } from '../palettes';

export const darkModeColors: Colors = {
  white: palettes.globalWhite,
  black: palettes.globalBlack,
  transparent: palettes.transparent,
  primary: palettes.orange['60'],
  onPrimary: palettes.globalWhite,
  primaryContainer: palettes.orange['10'],
  onPrimaryContainer: palettes.orange['65'],
  informative: palettes.blue['50'],
  onInformative: palettes.blue['95'],
  informativeContainer: palettes.blue['10'],
  onInformativeContainer: palettes.blue['60'],
  error: palettes.red['50'],
  onError: palettes.red['95'],
  errorContainer: palettes.red['10'],
  onErrorContainer: palettes.red['60'],
  success: palettes.green['50'],
  onSuccess: palettes.green['95'],
  successContainer: palettes.green['10'],
  onSuccessContainer: palettes.green['60'],
  warning: palettes.yellow['75'],
  onWarning: palettes.yellow['5'],
  warningContainer: palettes.yellow['10'],
  onWarningContainer: palettes.yellow['60'],
  surface1: palettes.whiteAlpha['5'],
  surface2: palettes.neutral['10'],
  surface3: palettes.globalBlack,
  surface4: palettes.neutral['40'],
  surfaceOnMedia: `${palettes.neutral['50']}66`,
  disable: palettes.whiteAlpha['15'],
  outline1: palettes.whiteAlpha['8'],
  outline2: palettes.whiteAlpha['15'],
  outlineNeutral: palettes.neutral['95'],
  outlineDisable: palettes.whiteAlpha['10'],
  outlinePrimary: palettes.orange['60'],
  outlineInformative: palettes.blue['50'],
  outlineError: palettes.red['40'],
  outlineSuccess: palettes.green['50'],
  outlineWarning: palettes.yellow['75'],
  onView1: palettes.neutral['95'],
  onView2: `${palettes.neutral['95']}a6`,
  onView3: palettes.neutral['50'],
  onViewPrimary: palettes.orange['65'],
  onViewInformative: palettes.blue['60'],
  onViewError: palettes.red['60'],
  onViewSuccess: palettes.green['60'],
  onViewWarning: palettes.yellow['75'],
  background: palettes.neutral['5'],
  inverseSurface: palettes.neutral['95'],
  onInverseSurface: palettes.neutral['5'],
  dim: palettes.blackAlpha['80'],
  inverseDim: palettes.blackAlpha['20'],
  overlay: palettes.whiteAlpha['10'],
  onColor: '$colors.onView1',
};
