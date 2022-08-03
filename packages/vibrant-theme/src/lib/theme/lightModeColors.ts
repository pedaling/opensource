import type { Colors } from '../../types';
import { palettes } from '../palettes';

export const lightModeColors: Colors = {
  primary: palettes.orange['50'],
  onPrimary: palettes.white,
  primaryContainer: palettes.orange['95'],
  onPrimaryContainer: palettes.orange['45'],
  informative: palettes.violetBlue['40'],
  onInformative: palettes.violetBlue['95'],
  informativeContainer: palettes.violetBlue['95'],
  onInformativeContainer: palettes.violetBlue['40'],
  error: palettes.red['40'],
  onError: palettes.red['95'],
  errorContainer: palettes.red['95'],
  onErrorContainer: palettes.red['40'],
  success: palettes.green['50'],
  onSuccess: palettes.green['95'],
  successContainer: palettes.green['95'],
  onSuccessContainer: palettes.green['40'],
  background: palettes.white,
  surface1: palettes.blackAlpha['5'],
  surface2: palettes.white,
  surface3: palettes.white,
  surface4: palettes.neutral['70'],
  onView1: palettes.neutral['5'],
  onView2: palettes.neutral['40'],
  onView3: palettes.neutral['60'],
  outline1: palettes.blackAlpha['15'],
  outline2: palettes.blackAlpha['5'],
  outlinePrimary: palettes.orange['50'],
  outlineNeutral: palettes.neutral['5'],
  outlineError: palettes.red['40'],
  disable: palettes.blackAlpha['10'],
  disableOutline: palettes.blackAlpha['10'],
  inverseBackground: palettes.neutral['10'],
  onInverseBackground: palettes.neutral['95'],
  dim: palettes.blackAlpha['70'],
  hoverOverlay: palettes.whiteAlpha['10'],
  transparent: palettes.transparent,
  onColor: '$colors.onView1',
  white: palettes.white,
};
