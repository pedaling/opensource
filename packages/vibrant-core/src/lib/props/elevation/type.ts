import type { ElevationLevel, Shadow } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type ElevationSystemProps = {
  elevationLevel?: ResponsiveValue<ElevationLevel>;
  boxShadow?: ResponsiveValue<Shadow[]>;
};
