import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type DividerProps = {
  direction: 'horizontal' | 'vertical';
  kind?: ResponsiveValue<'dashed' | 'default' | 'thick'>;
  margin?: ResponsiveValue<'lg' | 'md' | 'none'>;
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
        name: 'kind',
        responsive: true,
        keep: true,
        default: 'default',
      },
    ],
    variants: {
      dashed: {
        borderColor: 'outline1',
        size: 1,
        borderStyle: 'dashed',
      },
      thick: {
        borderColor: 'outline2',
        size: 12,
        borderStyle: 'solid',
      },
      default: {
        borderColor: 'outline1',
        size: 1,
        borderStyle: 'solid',
      },
    } as const,
  }),
  propVariant({
    props: [
      {
        name: 'direction',
      },
      {
        name: 'size',
      },
      {
        name: 'spacing',
        responsive: true,
      },
    ],
    variants: ({ direction, size, spacing }) => {
      if (direction === 'horizontal') {
        return {
          width: '100%',
          height: 0,
          borderTopWidth: size,
          my: spacing,
        };
      }

      return {
        width: 0,
        borderRightWidth: size,
        height: '100%',
        mx: spacing,
      };
    },
  })
);
