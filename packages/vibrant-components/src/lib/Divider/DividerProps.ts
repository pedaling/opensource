import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type DividerProps = {
  direction: 'horizontal' | 'vertical';
  thickness: ResponsiveValue<1 | 12>;
  margin?: ResponsiveValue<'none' | 'md' | 'lg'>;
};

export const withDividerVariation = withVariation<DividerProps>()(
  propVariant({
    props: [
      {
        name: 'margin',
        responsive: true,
        default: 'none',
      },
    ],
    variants: {
      none: {
        spacing: 0,
      },
      md: {
        spacing: 16,
      },
      lg: {
        spacing: 24,
      },
    },
  }),
  propVariant({
    props: [
      {
        name: 'thickness',
        responsive: true,
        keep: true,
      },
    ],
    variants: {
      1: {
        backgroundColor: 'outline1',
      },
      12: {
        backgroundColor: 'outline2',
      },
    },
  }),
  propVariant({
    props: [
      {
        name: 'direction',
      },
      {
        name: 'thickness',
        responsive: true,
      },
      {
        name: 'spacing',
        responsive: true,
      },
    ],
    variants: ({ direction, thickness, spacing }) => {
      if (direction === 'horizontal') {
        return {
          width: '100%',
          height: thickness,
          my: spacing,
        };
      }

      return {
        width: thickness,
        height: '100%',
        mx: spacing,
      };
    },
  })
);
