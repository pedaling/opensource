import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SpinnerProps = {
  size: ResponsiveValue<'lg' | 'md' | 'sm' | 'xl' | 'xs'>;
  testId?: string;
};

export const withSpinnerVariation = withVariation<SpinnerProps>('Spinner')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
    ],
    variants: {
      xs: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderWidth: 2,
      },
      sm: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 3,
      },
      md: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 4,
      },
      lg: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 5,
      },
      xl: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 8,
      },
    },
  })
);
