import type { ResponsiveValue } from '../../../types';

export type ScrollItemSystemProps = {
  scrollSnapStop?: ResponsiveValue<string>;
  snapAlignment?: ResponsiveValue<'center' | 'end' | 'start'>;
};
