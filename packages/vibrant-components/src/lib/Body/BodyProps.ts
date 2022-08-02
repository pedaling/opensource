import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { TextProps } from '../Text';

export type BodyProps = Omit<TextProps, 'kind'> & {
  level: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6>;
};

export const withBodyVariation = withVariation<BodyProps>('Body')(
  propVariant({
    props: [
      {
        name: 'level',
        responsive: true,
      },
    ],
    variants: ({ level }) => ({
      kind: `body${level}` as const,
    }),
  })
);
