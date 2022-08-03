import type { TypographyKind, TypographyWeight } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type TypographyProps = {
  typography?: ResponsiveValue<TypographyKind>;
  fontFamily?: ResponsiveValue<string>;
  fontSize?: ResponsiveValue<number | string>;
  fontWeight?: ResponsiveValue<TypographyWeight>;
  fontStyle?: ResponsiveValue<'italic' | 'normal' | 'oblique'>;
  lineHeight?: ResponsiveValue<number | string>;
  letterSpacing?: ResponsiveValue<number | string>;
  textAlign?: ResponsiveValue<'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start'>;
  textTransform?: ResponsiveValue<'capitalize' | 'full-size-kana' | 'full-width' | 'lowercase' | 'none' | 'uppercase'>;
  whiteSpace?: ResponsiveValue<'break-spaces' | 'normal' | 'nowrap' | 'pre-line' | 'pre-wrap' | 'pre'>;
  wordBreak?: ResponsiveValue<'break-all' | 'break-word' | 'keep-all' | 'normal'>;
  wordWrap?: ResponsiveValue<'break-word' | 'normal'>;
  lineLimit?: number;
};
