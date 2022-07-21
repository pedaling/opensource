import type { ReactNode, RefObject } from 'react';
import type { ResponsiveValue, SizingProps, TypographyProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { ColorToken, TypographyKind, TypographyWeight } from '@vibrant-ui/theme';

export type TextProps = Omit<TypographyProps, 'typography' | 'fontWeight'> & {
  as?: 'span' | 'p';
  ref?: RefObject<HTMLElement>;
  kind: ResponsiveValue<TypographyKind>;
  weight?: ResponsiveValue<TypographyWeight>;
  color?: ResponsiveValue<ColorToken>;
  children: ReactNode;
} & Pick<SizingProps, 'maxWidth'>;

export const withTextVariation = withVariation<TextProps>()();
