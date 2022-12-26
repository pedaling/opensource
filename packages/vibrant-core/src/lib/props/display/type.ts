import type { OpacityToken } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type DisplaySystemProps = {
  display?: ResponsiveValue<'flex' | 'inline-flex' | 'none' | 'web_table-cell' | 'web_table-layout' | 'web_table-row'>;
  visibility?: ResponsiveValue<'hidden' | 'inherit' | 'visible'>;
  opacity?: ResponsiveValue<OpacityToken | number>;
  hidden?: ResponsiveValue<boolean>;
};
