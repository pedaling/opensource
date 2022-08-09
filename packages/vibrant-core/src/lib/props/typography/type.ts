import type { TypographyKind, TypographyWeight } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type TypographySystemProps = {
  typography?: ResponsiveValue<TypographyKind>;
  fontFamily?: ResponsiveValue<string>;
  fontSize?: ResponsiveValue<number | string>;
  fontWeight?: ResponsiveValue<TypographyWeight>;
  fontStyle?: ResponsiveValue<'italic' | 'normal' | 'oblique'>;
  lineHeight?: ResponsiveValue<number | string>;
};
