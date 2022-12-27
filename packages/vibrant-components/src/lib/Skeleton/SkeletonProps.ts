import type { BorderSystemProps, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type SkeletonProps = Pick<BorderSystemProps, 'borderRadius' | 'borderRadiusLevel'> & {
  maxWidth?: ResponsiveValue<number>;
  width: ResponsiveValue<number | '100%'>;
  height: ResponsiveValue<number | '100%'>;
};

export const withSkeletonVariation = withVariation<SkeletonProps>('Skeleton')();
