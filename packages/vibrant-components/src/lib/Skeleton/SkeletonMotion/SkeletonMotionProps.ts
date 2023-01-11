import type { MotionProps } from 'packages/vibrant-motion/src/lib/Motion';
import { withVariation } from '@vibrant-ui/core';

export type SkeletonMotionProps = {
  children: MotionProps['children'];
};

export const withSkeletonMotionVariation = withVariation<SkeletonMotionProps>('SkeletonMotion')();
