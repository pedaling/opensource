import type { ReactNode, RefObject } from 'react';
import type { DisplayProps, FlexboxProps, ResponsiveValue, SizingProps, SpacingProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

type SemanticTagName = 'section' | 'header' | 'aside' | 'footer' | 'nav' | 'article';

export type StackProps = {
  as?: 'div' | SemanticTagName | 'label';
  direction: ResponsiveValue<'horizontal' | 'vertical'>;
  ref?: RefObject<HTMLElement>;
  spacing?: ResponsiveValue<number>;
  children?: ReactNode;
} & SpacingProps &
  FlexboxProps &
  DisplayProps &
  SizingProps;

export const withStackVariation = withVariation<StackProps>()(
  propVariant({
    props: [
      {
        name: 'direction',
        responsive: true,
        keep: true,
      },
    ],
    variants: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'direction',
        responsive: true,
      },
      {
        name: 'spacing',
        responsive: true,
        keep: true,
      },
    ],
    variants: ({ direction, spacing }) => {
      if (!spacing) {
        return {
          spaceWidth: 0,
          spaceHeight: 0,
        };
      }

      if (direction === 'horizontal') {
        return {
          spaceWidth: spacing,
          spaceHeight: 0,
        };
      }

      return {
        spaceWidth: 0,
        spaceHeight: spacing,
      };
    },
  })
);
