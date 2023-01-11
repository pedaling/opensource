import type { BorderSystemProps, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type SkeletonImageProps = Pick<BorderSystemProps, 'borderRadiusLevel'> & {
  width: ResponsiveValue<number | '100%'>;
  ratio: ResponsiveValue<number>;
};

export const withSkeletonImageVariation = withVariation<SkeletonImageProps>('SkeletonImage')();
