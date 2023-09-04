import type { BorderSystemProps, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type SkeletonImageProps = Pick<BorderSystemProps, 'rounded'> & {
  width: ResponsiveValue<number | `${number}%`>;
  ratio: ResponsiveValue<number>;
  maxWidth?: ResponsiveValue<number | `${number}%`>;
};

export const withSkeletonImageVariation = withVariation<SkeletonImageProps>('SkeletonImage')();
