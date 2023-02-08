import type { ResponsiveValue } from '../../../types';

export type TextSystemProps = {
  letterSpacing?: ResponsiveValue<number | string>;
  textAlign?: ResponsiveValue<'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start'>;
  textTransform?: ResponsiveValue<'capitalize' | 'full-size-kana' | 'full-width' | 'lowercase' | 'none' | 'uppercase'>;
  whiteSpace?: ResponsiveValue<'break-spaces' | 'normal' | 'nowrap' | 'pre-line' | 'pre-wrap' | 'pre'>;
  wordBreak?: ResponsiveValue<'break-all' | 'break-word' | 'keep-all' | 'normal'>;
  wordWrap?: ResponsiveValue<'break-word' | 'normal'>;
  overflowWrap?: ResponsiveValue<'anywhere' | 'break-word' | 'normal'>;
  textDecorationLine?: ResponsiveValue<'line-through' | 'none' | 'underline line-through' | 'underline'>;
  lineLimit?: number;
};
