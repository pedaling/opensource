import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(
  ({ innerRef, children, duration, loop, from, to, delay = 0, easing = 'easeOutQuad', onEnd }) => children
);
