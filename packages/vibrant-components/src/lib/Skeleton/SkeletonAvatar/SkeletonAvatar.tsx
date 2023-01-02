import { Box } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { withSkeletonAvatarVariation } from './SkeletonAvatarProps';

export const SkeletonAvatar = withSkeletonAvatarVariation(({ size }) => (
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
    <Box backgroundColor="surface1" borderRadiusLevel={5} width={size} height={size}></Box>
  </Motion>
));
