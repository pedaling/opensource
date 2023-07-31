import { Box } from '@vibrant-ui/core';
import { withSkeletonFieldVariation } from './SkeletonFieldProps';

export const SkeletonField = withSkeletonFieldVariation(({ width = '100%', height }) => (
  <Box backgroundColor="disable" rounded="sm" width={width} height={height} />
));
