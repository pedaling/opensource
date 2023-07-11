import { Box } from '@vibrant-ui/core';
import { withSkeletonFieldVariation } from './SkeletonFieldProps';

export const SkeletonField = withSkeletonFieldVariation(({ width = '100%', height }) => (
  <Box backgroundColor="disable" borderRadiusLevel={1} width={width} height={height} />
));
