import type { BorderSystemProps, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type SkeletonProps = Pick<BorderSystemProps, 'borderRadiusLevel'> & {
  width: ResponsiveValue<number | `${number}%`>;
  height: ResponsiveValue<number | `${number}%`>;
  maxWidth?: ResponsiveValue<number | `${number}%`>;
};

export const withSkeletonVariation = withVariation<SkeletonProps>('Skeleton')();
