import { Box } from '@vibrant-ui/core';
import { withSkeletonAvatarVariation } from './SkeletonAvatarProps';

export const SkeletonAvatar = withSkeletonAvatarVariation(({ size }) => (
  <Box backgroundColor="disable" borderRadiusLevel={5} width={size} height={size} />
));
