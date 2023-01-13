import type { PositionSystemProps, ResponsiveValue, TextProps, TypographySystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { TypographyWeight } from '@vibrant-ui/theme';

export type DisplayProps = Omit<TextProps, keyof PositionSystemProps | keyof TypographySystemProps> & {
  level: ResponsiveValue<1 | 2 | 3 | 4>;
  weight?: ResponsiveValue<TypographyWeight>;
};

const DisplayLevelTagMap: { [key: number]: string } = {
  2: 'h1',
  3: 'h1',
  4: 'h1',
};

export const withDisplayVariation = withVariation<DisplayProps>('Display')(
  propVariant({
    props: [
      {
        name: 'level',
        responsive: true,
      },
    ],
    variants: ({ level }) => ({
      typography: `display${level}` as const,
      as: DisplayLevelTagMap[level] ?? undefined,
    }),
  }),
  propVariant({
    props: [
      {
        name: 'weight',
        responsive: true,
        default: 'extraBold' as const,
      },
    ],
    variants: ({ weight }) => ({
      fontWeight: weight,
    }),
  })
);
