import { Box } from '@vibrant-ui/core';
import { SkeletonMotion } from '../SkeletonMotion';
import { withSkeletonChipVariation } from './SkeletonChipProps';

export const SkeletonChip = withSkeletonChipVariation(({ width = '100%', height }) => (
  <SkeletonMotion>
    <Box backgroundColor="surface1" borderRadiusLevel={5} width={width} height={height}></Box>
  </SkeletonMotion>
));
