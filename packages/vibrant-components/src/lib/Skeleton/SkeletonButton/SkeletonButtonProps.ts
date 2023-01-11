import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { sizeVariation } from '../../ContainedButton';

export type SkeletonButtonProps = {
  size: ResponsiveValue<'lg' | 'md' | 'sm' | 'xl'>;
  width?: ResponsiveValue<number | `${number}%`>;
  maxWidth?: ResponsiveValue<number | `${number}%`>;
};

export const withSkeletonButtonVariation = withVariation<SkeletonButtonProps>('SkeletonButton')(
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
      const { py, typography } = sizeVariation[size];

      switch (size) {
        case 'sm':
          return {
            py,
            typography,
            width: width ?? 62,
          };
        case 'md':
          return {
            py,
            typography,
            width: width ?? 72,
          };
        case 'lg':
          return {
            py,
            typography,
            width: width ?? 76,
          };
        case 'xl':
        default:
          return {
            py,
            typography,
            width: width ?? 86,
          };
      }
    },
  })
);
