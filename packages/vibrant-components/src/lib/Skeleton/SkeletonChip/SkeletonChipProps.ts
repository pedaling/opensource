import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SkeletonChipProps = {
  size: ResponsiveValue<'md' | 'sm'>;
  width: ResponsiveValue<number>;
};

export const withSkeletonChipVariation = withVariation<SkeletonChipProps>('SkeletonChip')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
      {
        name: 'width',
        responsive: true,
      },
    ],
    variants: ({ size, width }) => {
      switch (size) {
        case 'sm':
          return {
            height: 30,
            width: width ?? 48,
          };
        case 'md':
        default:
          return {
            height: 38,
            width: width ?? 60,
          };
      }
    },
  })
);
