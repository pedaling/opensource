import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { TextProps } from '../Text';

export type TitleProps = Omit<TextProps, 'kind'> & {
  level: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7>;
};

export const withTitleVariation = withVariation<TitleProps>('Title')(
  propVariant({
    props: [
      {
        name: 'level',
        responsive: true,
      },
    ],
    variants: ({ level }) => ({
      kind: `title${level}` as const,
    }),
  })
);
