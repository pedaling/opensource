import type { BorderSystemProps, ReactElementChild, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type SkeletonProps = Pick<BorderSystemProps, 'borderRadiusLevel'> & {
  width: ResponsiveValue<number | 'auto' | `${number}%`>;
  height: ResponsiveValue<number | 'auto' | `${number}%`>;
  maxWidth?: ResponsiveValue<number | `${number}%`>;
  children?: ReactElementChild;
};

export const withSkeletonVariation = withVariation<SkeletonProps>('Skeleton')();
