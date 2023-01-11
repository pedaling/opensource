import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SkeletonFieldProps = {
  size: ResponsiveValue<'lg' | 'md'>;
  width?: ResponsiveValue<number | `${number}%`>;
  maxWidth?: ResponsiveValue<number | `${number}%`>;
};

export const withSkeletonFieldVariation = withVariation<SkeletonFieldProps>('SkeletonField')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
    ],
    variants: {
      md: {
        height: 38,
      },
      lg: {
        height: 50,
      },
    },
  })
);
