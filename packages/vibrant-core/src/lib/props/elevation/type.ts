import type { BoxShadow, ElevationLevel, NativeShadow } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type ElevationSystemProps = {
  elevationLevel?: ResponsiveValue<ElevationLevel>;
  boxShadow?: ResponsiveValue<BoxShadow[]>;
  nativeShadow?: ResponsiveValue<NativeShadow[]>;
};
