import type { ResponsiveValue } from '../../types';

export type TypographyProps = {
  fontFamily?: ResponsiveValue<string>;
  fontSize?: ResponsiveValue<string | number>;
  fontStyle?: ResponsiveValue<'italic' | 'normal' | 'oblique'>;
  fontWeight?: ResponsiveValue<'bold' | 'normal' | 'bolder' | 'lighter' | number>;
  letterSpacing?: ResponsiveValue<string | number>;
  textTransform?: ResponsiveValue<'capitalize' | 'full-size-kana' | 'full-width' | 'lowercase' | 'none' | 'uppercase'>;
  lineHeight?: ResponsiveValue<string | number>;
  textAlign?: ResponsiveValue<'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start'>;
};
