import type { OpacityToken } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type DisplaySystemProps = {
  // MEMO: 'table', 'table-row', 'table' only works in web
  display?: ResponsiveValue<'flex' | 'inline-flex' | 'none' | 'table-cell' | 'table-layout' | 'table-row'>;
  visibility?: ResponsiveValue<'hidden' | 'inherit' | 'visible'>;
  opacity?: ResponsiveValue<OpacityToken | number>;
  hidden?: ResponsiveValue<boolean>;
};
