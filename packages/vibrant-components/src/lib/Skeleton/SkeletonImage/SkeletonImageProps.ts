import type { BorderSystemProps, ResponsiveValue } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SkeletonImageProps = Pick<BorderSystemProps, 'borderRadiusLevel'> & {
  width: ResponsiveValue<number | '100%'>;
  ratio: ResponsiveValue<'1:1' | '3:4' | '4:3' | '16:9'>;
};

export const withSkeletonImageVariation = withVariation<SkeletonImageProps>('SkeletonImage')(
  propVariant({
    props: [{ name: 'ratio', responsive: true }],
    variants: {
      '1:1': {
        ratio: 1,
      },
      '3:4': {
        ratio: 3 / 4,
      },
      '4:3': {
        ratio: 4 / 3,
      },
      '16:9': {
        ratio: 16 / 9,
      },
    },
  })
);
