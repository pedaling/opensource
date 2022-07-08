import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { TextProps } from '../Text';

export type ParagraphProps = Omit<TextProps, 'kind'> & {
  level: ResponsiveValue<1 | 2 | 3>;
};

export const withParagraphVariation = withVariation<ParagraphProps>()(
  propVariant({
    props: [
      {
        name: 'level',
        responsive: true,
      },
    ],
    variants: ({ level }) => ({
      kind: `paragraph${level}` as const,
    }),
  })
);
