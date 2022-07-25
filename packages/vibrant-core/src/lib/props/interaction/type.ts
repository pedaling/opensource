import type { ResponsiveValue } from '../../types';

export type InteractionProps = {
  cursor?: ResponsiveValue<'default' | 'pointer' | 'text'>;
  pressable?:
    | false
    | {
        overlayColor: ResponsiveValue<string>;
        interactions?: ('active' | 'focus' | 'hover')[];
      }
    | {
        overlayColor?: never;
        interactions?: ('active' | 'focus')[];
      };
};
