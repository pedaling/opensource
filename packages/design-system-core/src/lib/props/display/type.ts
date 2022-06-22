import type { ResponsiveValue } from '../../types';

export type DisplayProps = {
  display?: ResponsiveValue<'flex' | 'inline-flex' | 'none'>;
  visibility?: ResponsiveValue<'collapse' | 'hidden' | 'visible'>;
  opacity?: ResponsiveValue<number>;
};
