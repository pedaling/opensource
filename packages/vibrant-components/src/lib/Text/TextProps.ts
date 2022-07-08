import type { ReactNode } from 'react';
import type { ResponsiveValue, TypographyProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { ColorToken, TypographyKind, TypographyWeight } from '@vibrant-ui/theme';

export type TextProps = Omit<TypographyProps, 'typography' | 'fontWeight'> & {
  as?: 'span' | 'p';
  kind: ResponsiveValue<TypographyKind>;
  weight?: ResponsiveValue<TypographyWeight>;
  color?: ResponsiveValue<ColorToken>;
  children: ReactNode;
};

export const withTextVariation = withVariation<TextProps>()();
