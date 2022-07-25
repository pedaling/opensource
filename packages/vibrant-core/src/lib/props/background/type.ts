import type { ResponsiveValue } from '../../types';

export type BackgroundProps = {
  background?: ResponsiveValue<string>;
  backgroundColor?: ResponsiveValue<string>;
  backgroundImage?: ResponsiveValue<string>;
  backgroundSize?: ResponsiveValue<'auto' | 'contain' | 'cover'>;
  backgroundPosition?: ResponsiveValue<'bottom' | 'center' | 'left' | 'right' | 'top'>;
  backgroundRepeat?: ResponsiveValue<'no-repeat' | 'repeat-x' | 'repeat-y' | 'repeat' | 'round' | 'space'>;
};
