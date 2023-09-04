import { Box } from '@vibrant-ui/core';
import { withSkeletonAvatarVariation } from './SkeletonAvatarProps';

export const SkeletonAvatar = withSkeletonAvatarVariation(({ size }) => (
  <Box backgroundColor="disable" rounded="full" width={size} height={size} />
));
