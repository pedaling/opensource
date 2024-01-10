import type { ResponsiveValue } from '../../../types';

export type ScrollSystemProps = {
  scrollSnap?: ResponsiveValue<string>;
  horizontal?: ResponsiveValue<boolean>;
  hideScroll?: ResponsiveValue<boolean>;
};

export type ScrollItemSystemProps = {
  scrollSnapStop?: ResponsiveValue<string>;
  snapAlignment?: ResponsiveValue<'center' | 'end' | 'start'>;
};
