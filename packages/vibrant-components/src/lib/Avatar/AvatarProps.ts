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
        };
      }

      if (size === 'sm') {
        return { size: 16 };
      }

      if (size === 'md') {
        return { size: 24 };
      }

      return { size: 44 };
    },
  })
);
