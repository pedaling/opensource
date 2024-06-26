import type { PositionSystemProps, ResponsiveValue, TextProps, TypographySystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { TypographyWeight } from '@vibrant-ui/theme';

export type ParagraphProps = Omit<TextProps, keyof PositionSystemProps | keyof TypographySystemProps> & {
  level: ResponsiveValue<1 | 2 | 3 | 4>;
  weight?: ResponsiveValue<TypographyWeight>;
  testId?: string;
};

export const withParagraphVariation = withVariation<ParagraphProps>('Paragraph')(
  propVariant({
    props: [
      {
        name: 'level',
        responsive: true,
      },
    ],
    variants: ({ level }) => ({
      typography: `paragraph${level}` as const,
    }),
  }),
  propVariant({
    props: [
      {
        name: 'weight',
        responsive: true,
        default: 'regular' as const,
      },
    ],
    variants: ({ weight }) => ({
      fontWeight: weight,
    }),
  })
);
