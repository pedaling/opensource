import { palettes } from '../palettes';
import type { Colors } from '../types';

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
  gradientTop:
    'linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.00583476) 8.3%, rgba(255, 255, 255, 0.0229418) 15.51%, rgba(255, 255, 255, 0.0507253) 21.85%, rgba(255, 255, 255, 0.0885893) 27.49%, rgba(255, 255, 255, 0.135938) 32.64%, rgba(255, 255, 255, 0.192176) 37.49%, rgba(255, 255, 255, 0.256707) 42.25%, rgba(255, 255, 255, 0.328934) 47.09%, rgba(255, 255, 255, 0.408264) 52.22%, rgba(255, 255, 255, 0.494098) 57.83%, rgba(255, 255, 255, 0.585843) 64.13%, rgba(255, 255, 255, 0.682901) 71.3%, rgba(255, 255, 255, 0.784677) 79.53%, rgba(255, 255, 255, 0.890576) 89.04%, #FFFFFF 100%)',
  gradientBottom:
    ' linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.00583476) 8.3%, rgba(255, 255, 255, 0.0229418) 15.51%, rgba(255, 255, 255, 0.0507253) 21.85%, rgba(255, 255, 255, 0.0885893) 27.49%, rgba(255, 255, 255, 0.135938) 32.64%, rgba(255, 255, 255, 0.192176) 37.49%, rgba(255, 255, 255, 0.256707) 42.25%, rgba(255, 255, 255, 0.328934) 47.09%, rgba(255, 255, 255, 0.408264) 52.22%, rgba(255, 255, 255, 0.494098) 57.83%, rgba(255, 255, 255, 0.585843) 64.13%, rgba(255, 255, 255, 0.682901) 71.3%, rgba(255, 255, 255, 0.784677) 79.53%, rgba(255, 255, 255, 0.890576) 89.04%, #FFFFFF 100%)',
  hoverOverlay: palettes.whiteAlpha['10'],

  onColor: 'var(--system-on-color)',
};
