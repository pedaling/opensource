import type { TypographySize, TypographyWeight } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../types';

export type TypographyProps = {
  typographySize?: ResponsiveValue<TypographySize>;
  typographyWeight?: ResponsiveValue<TypographyWeight>;
  fontStyle?: ResponsiveValue<'italic' | 'normal' | 'oblique'>;
  letterSpacing?: ResponsiveValue<string | number>;
  textAlign?: ResponsiveValue<'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start'>;
  textTransform?: ResponsiveValue<'capitalize' | 'full-size-kana' | 'full-width' | 'lowercase' | 'none' | 'uppercase'>;
};
