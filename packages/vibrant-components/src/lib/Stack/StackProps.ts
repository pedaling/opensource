import type { RefObject } from 'react';
import type {
  DisplaySystemProps,
  FlexboxSystemProps,
  OverflowSystemProps,
  ReactElementChild,
  ResponsiveValue,
  SizingSystemProps,
  SpacingSystemProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

type SemanticTagName = 'article' | 'aside' | 'footer' | 'header' | 'nav' | 'section';

export type StackProps = DisplaySystemProps &
  FlexboxSystemProps &
  OverflowSystemProps &
  SizingSystemProps &
  SpacingSystemProps & {
    as?: SemanticTagName | 'div' | 'label';
    direction: ResponsiveValue<'horizontal' | 'vertical'>;
    ref?: RefObject<HTMLElement>;
    spacing?: ResponsiveValue<number>;
    children?: ReactElementChild | ReactElementChild[];
  };

export const withStackVariation = withVariation<StackProps>('Stack')(
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
