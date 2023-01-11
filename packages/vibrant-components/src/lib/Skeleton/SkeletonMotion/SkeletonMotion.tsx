import { Motion } from '@vibrant-ui/motion';
import { withSkeletonMotionVariation } from './SkeletonMotionProps';

export const SkeletonMotion = withSkeletonMotionVariation(({ children }) => (
  <Motion
    animation={{
      opacity: {
        from: 1,
        to: 0.4,
      },
    }}
    loop="reverse"
    duration={1200}
    easing="easeOutQuad"
  >
    {children}
  </Motion>
));
