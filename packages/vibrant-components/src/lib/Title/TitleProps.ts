import type { PositionSystemProps, ResponsiveValue, TextProps, TypographySystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { TypographyWeight } from '@vibrant-ui/theme';

export type TitleProps = Omit<TextProps, keyof PositionSystemProps | keyof TypographySystemProps> & {
  level: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7>;
  weight?: ResponsiveValue<TypographyWeight>;
};

const TitleLevelTagMap: { [key: number]: string } = {
  1: 'h2',
  2: 'h2',
  3: 'h2',
  4: 'h3',
  5: 'h3',
  6: 'h3',
  7: 'h3',
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
      as: TitleLevelTagMap[level] ?? undefined,
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
