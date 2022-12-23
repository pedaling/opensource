import type { OpacityToken } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type DisplaySystemProps = {
  display?: ResponsiveValue<'flex' | 'inline-flex' | 'none' | 'table-cell' | 'table-row' | 'table'>;
  visibility?: ResponsiveValue<'hidden' | 'inherit' | 'visible'>;
  opacity?: ResponsiveValue<OpacityToken | number>;
  hidden?: ResponsiveValue<boolean>;
};
