import { withVariation } from '@vibrant-ui/core';
import type { MotionProps } from '../Motion/MotionProps';

type MountMotionProps = Pick<MotionProps, 'children' | 'duration' | 'easing' | 'onEnd' | 'onStart'> & {
  mount?: boolean;
  mountAnimation?: MotionProps['animation'];
  unmountAnimation?: MotionProps['animation'];
};

export const withMountMotionVariation = withVariation<MountMotionProps>('MountMotion')();
