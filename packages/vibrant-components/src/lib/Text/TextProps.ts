import type { ReactNode, RefObject } from 'react';
import type { ResponsiveValue, SizingSystemProps, TextSystemProps as SystemTextProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { ColorToken, TypographyKind, TypographyWeight } from '@vibrant-ui/theme';

export type TextProps = SystemTextProps &
  Pick<SizingSystemProps, 'maxWidth'> & {
    as?: 'p' | 'span';
    ref?: RefObject<HTMLElement>;
    kind: ResponsiveValue<TypographyKind>;
    weight?: ResponsiveValue<TypographyWeight>;
    color?: ResponsiveValue<ColorToken>;
    children: ReactNode;
  };

export const withTextVariation = withVariation<TextProps>('Text')();
