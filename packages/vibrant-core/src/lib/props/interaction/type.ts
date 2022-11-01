import type { ResponsiveValue } from '../../../types';

export type InteractionSystemProps = {
  cursor?: ResponsiveValue<'default' | 'pointer' | 'text'>;
  pointerEvents?: ResponsiveValue<'auto' | 'none'>;
};
