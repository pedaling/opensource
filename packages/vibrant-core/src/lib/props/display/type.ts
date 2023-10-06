import type { OpacityToken } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type DisplaySystemProps = {
  display?: ResponsiveValue<
    | 'flex'
    | 'inline-flex'
    | 'none'
    | 'web_block'
    | 'web_grid'
    | 'web_table-cell'
    | 'web_table-row-group'
    | 'web_table-row'
    | 'web_table'
  >;
  visibility?: ResponsiveValue<'hidden' | 'inherit' | 'visible'>;
  opacity?: ResponsiveValue<OpacityToken | number>;
  hidden?: ResponsiveValue<boolean>;
  tableLayout?: ResponsiveValue<'auto' | 'fixed'>;
  writingMode?: ResponsiveValue<'horizontal-tb' | 'vertical-lr' | 'vertical-rl'>;
};
