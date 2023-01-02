import type { BorderSystemProps, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type SkeletonImageProps = Pick<BorderSystemProps, 'borderRadiusLevel'> & {
  width: ResponsiveValue<number | '100%'>;
  ratio?: ResponsiveValue<'1:1' | '3:4' | '4:3' | '16:9'>;
};

export const withSkeletonImageVariation = withVariation<SkeletonImageProps>('SkeletonImage')();
