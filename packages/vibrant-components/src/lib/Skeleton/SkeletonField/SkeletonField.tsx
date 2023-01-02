import { Box } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { withSkeletonFieldVariation } from './SkeletonFieldProps';

export const SkeletonField = withSkeletonFieldVariation(({ width = '100%', height }) => (
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
    <Box backgroundColor="surface1" borderRadiusLevel={1} width={width} height={height}></Box>
  </Motion>
));
