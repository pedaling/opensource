import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SkeletonAvatarProps = {
  size: ResponsiveValue<number | 'lg' | 'md' | 'sm' | 'xs'>;
};

export const withSkeletonAvatarVariation = withVariation<SkeletonAvatarProps>('SkeletonAvatar')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
    ],
    variants: ({ size }) => {
      if (typeof size === 'number') {
        return {
          size,
        };
      }

      if (size === 'xs') {
        return { size: 16 };
      }

      if (size === 'sm') {
        return { size: 24 };
      }

      if (size === 'md') {
        return { size: 30 };
      }

      return { size: 44 };
    },
  })
);
