import type { ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type AvatarProps = {
  testId?: string;
  size: ResponsiveValue<number | 'lg' | 'md' | 'sm' | 'xl' | 'xs'>;
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

      if (size === 'lg') {
        return { size: 44 };
      }

      return { size: 144 };
    },
  })
);
