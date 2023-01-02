import { Box } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { withSkeletonChipVariation } from './SkeletonChipProps';

export const SkeletonChip = withSkeletonChipVariation(({ width = '100%', height }) => (
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
    <Box backgroundColor="surface1" borderRadiusLevel={5} width={width} height={height}></Box>
  </Motion>
));
