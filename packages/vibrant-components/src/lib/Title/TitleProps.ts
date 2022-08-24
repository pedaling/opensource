import type { PositionSystemProps, ResponsiveValue, TextProps, TypographySystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { TypographyWeight } from '@vibrant-ui/theme';

export type TitleProps = Omit<TextProps, keyof PositionSystemProps | keyof TypographySystemProps> & {
  level: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7>;
  weight?: ResponsiveValue<TypographyWeight>;
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
      typography: `title${level}` as const,
    }),
  }),
  propVariant({
    props: [
      {
        name: 'weight',
        responsive: true,
        default: 'bold' as const,
      },
    ],
    variants: ({ weight }) => ({
      fontWeight: weight,
    }),
  })
);
