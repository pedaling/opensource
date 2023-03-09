import { Box } from '@vibrant-ui/core';
import { withSkeletonChipVariation } from './SkeletonChipProps';

export const SkeletonChip = withSkeletonChipVariation(({ width = '100%', height }) => (
  <Box backgroundColor="disable" borderRadiusLevel={5} width={width} height={height}></Box>
));
