import type { Colors } from '../../types';
import { palettes } from '../palettes';

export const lightModeColors: Colors = {
  white: palettes.globalWhite,
  black: palettes.globalBlack,
  transparent: palettes.transparent,
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
  surface1: palettes.blackAlpha['5'],
  surface2: palettes.globalWhite,
  surface3: palettes.globalWhite,
  surface4: palettes.neutral['80'],
  disable: palettes.blackAlpha['10'],
  outline1: palettes.blackAlpha['15'],
  outline2: palettes.blackAlpha['5'],
  outlineNeutral: palettes.neutral['5'],
  disableOutline: palettes.blackAlpha['5'],
  outlinePrimary: palettes.orange['60'],
  outlineInformative: palettes.blue['50'],
  outlineError: palettes.red['50'],
  outlineSuccess: palettes.green['50'],
  outlineWarning: palettes.yellow['75'],
  onView1: palettes.neutral['5'],
  onView2: palettes.neutral['40'],
  onView3: palettes.neutral['60'],
  onViewPrimary: palettes.orange['65'],
  onViewInformative: palettes.blue['55'],
  onViewError: palettes.red['55'],
  onViewSuccess: palettes.green['55'],
  onViewWarning: palettes.yellow['50'],
  background: palettes.globalWhite,
  inverseSurface: palettes.neutral['15'],
  onInverseSurface: palettes.neutral['95'],
  dim: palettes.blackAlpha['70'],
  overlay: palettes.whiteAlpha['80'],
  onColor: '$colors.onView1',
};
