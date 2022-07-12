import type { ResponsiveValue } from '../../types';

export type InteractionProps = {
  cursor?: ResponsiveValue<'default' | 'text' | 'pointer'>;
  pressable?:
    | {
        overlayColor: ResponsiveValue<string>;
        interactions?: ('hover' | 'focus' | 'active')[];
      }
    | {
        overlayColor?: never;
        interactions?: ('focus' | 'active')[];
      }
    | false;
};
