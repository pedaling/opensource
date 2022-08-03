import type { ElevationLevel, Shadow } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type ElevationProps = {
  elevationLevel?: ResponsiveValue<ElevationLevel>;
  boxShadow?: ResponsiveValue<Shadow[]>;
};
