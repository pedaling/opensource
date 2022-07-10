import type { TypographyKind, TypographyWeight } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../types';

export type TypographyProps = {
  typography?: ResponsiveValue<TypographyKind>;
  fontFamily?: ResponsiveValue<string>;
  fontSize?: ResponsiveValue<string | number>;
  fontWeight?: ResponsiveValue<TypographyWeight>;
  fontStyle?: ResponsiveValue<'italic' | 'normal' | 'oblique'>;
  lineHeight?: ResponsiveValue<string | number>;
  letterSpacing?: ResponsiveValue<string | number>;
  textAlign?: ResponsiveValue<'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start'>;
  textTransform?: ResponsiveValue<'capitalize' | 'full-size-kana' | 'full-width' | 'lowercase' | 'none' | 'uppercase'>;
  whiteSpace?: ResponsiveValue<'normal' | 'nowrap' | 'pre-line' | 'pre-wrap' | 'break-spaces' | 'pre'>;
};
