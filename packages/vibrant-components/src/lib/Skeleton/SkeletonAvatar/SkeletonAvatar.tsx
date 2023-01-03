import { Box } from '@vibrant-ui/core';
import { SkeletonMotion } from '../SkeletonMotion';
import { withSkeletonAvatarVariation } from './SkeletonAvatarProps';

export const SkeletonAvatar = withSkeletonAvatarVariation(({ size }) => (
  <SkeletonMotion>
    <Box backgroundColor="surface1" borderRadiusLevel={5} width={size} height={size}></Box>
  </SkeletonMotion>
));
