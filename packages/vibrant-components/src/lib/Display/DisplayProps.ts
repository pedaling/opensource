import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { TextProps } from '../Text';

export type DisplayProps = Omit<TextProps, 'kind'> & {
  level: ResponsiveValue<1 | 2 | 3 | 4>;
};

export const withDisplayVariation = withVariation<DisplayProps>()(
  propVariant({
    props: [
      {
        name: 'level',
        responsive: true,
      },
    ],
    variants: ({ level }) => ({
      kind: `display${level}` as const,
    }),
  })
);
