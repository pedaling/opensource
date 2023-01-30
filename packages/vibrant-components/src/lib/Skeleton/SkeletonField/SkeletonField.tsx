import { Box } from '@vibrant-ui/core';
import { SkeletonMotion } from '../SkeletonMotion';
import { withSkeletonFieldVariation } from './SkeletonFieldProps';

export const SkeletonField = withSkeletonFieldVariation(({ width = '100%', height }) => (
  <SkeletonMotion>
    <Box backgroundColor="disable" borderRadiusLevel={1} width={width} height={height}></Box>
  </SkeletonMotion>
));
