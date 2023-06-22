import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type AvatarProps = {
  testId?: string;
  size: ResponsiveValue<number | 'lg' | 'md' | 'sm' | 'xs'>;
  src: string;
  alt: string;
  placeholder?: string;
};

export const withAvatarVariation = withVariation<AvatarProps>('Avatar')(
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
          borderRadius: size / 2,
        };
      }

      if (size === 'xs') {
        return { size: 16, borderRadius: 8 };
      }

      if (size === 'sm') {
        return { size: 24, borderRadius: 12 };
      }

      if (size === 'md') {
        return { size: 30, borderRadius: 15 };
      }

      return { size: 44, borderRadius: 22 };
    },
  })
);
