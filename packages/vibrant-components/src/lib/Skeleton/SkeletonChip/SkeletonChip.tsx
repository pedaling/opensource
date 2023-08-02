import { Box } from '@vibrant-ui/core';
import { withSkeletonChipVariation } from './SkeletonChipProps';

export const SkeletonChip = withSkeletonChipVariation(({ width = '100%', height }) => (
  <Box backgroundColor="disable" rounded="full" width={width} height={height} />
));
