import { Box } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { withSkeletonVariation } from './SkeletonProps';

export const Skeleton = withSkeletonVariation(props => (
  <Motion
    animation={{
      opacity: {
        from: 1,
        to: 0.4,
      },
    }}
    loop="reverse"
    duration={2400}
  >
    <Box backgroundColor="surface1" {...props} />
  </Motion>
));
