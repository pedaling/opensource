import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SkeletonAvatarProps = {
  size: ResponsiveValue<'lg' | 'md' | 'sm' | 'xl' | 'xs'>;
};

export const withSkeletonAvatarVariation = withVariation<SkeletonAvatarProps>('SkeletonAvatar')(
  propVariant({
    props: [
      {
        name: 'size',
        responsive: true,
      },
    ],
    variants: {
      xs: {
        size: 16,
      },
      sm: {
        size: 22,
      },
      md: {
        size: 34,
      },
      lg: {
        size: 48,
      },
      xl: {
        size: 62,
      },
    },
  })
);
