import type { ComponentWithRef } from '@vibrant-ui/core';
import { Box } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import type { SkeletonAvatarProps } from './SkeletonAvatar';
import { SkeletonAvatar } from './SkeletonAvatar';
import type { SkeletonButtonProps } from './SkeletonButton';
import { SkeletonButton } from './SkeletonButton';
import type { SkeletonChipProps } from './SkeletonChip';
import { SkeletonChip } from './SkeletonChip';
import type { SkeletonFieldProps } from './SkeletonField';
import { SkeletonField } from './SkeletonField';
import type { SkeletonImageProps } from './SkeletonImage';
import { SkeletonImage } from './SkeletonImage';
import type { SkeletonProps } from './SkeletonProps';
import { withSkeletonVariation } from './SkeletonProps';
import type { SkeletonTextProps } from './SkeletonText';
import { SkeletonText } from './SkeletonText';

export const Skeleton = withSkeletonVariation(props => (
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
    <Box backgroundColor="surface1" {...props} />
  </Motion>
)) as ComponentWithRef<SkeletonProps> & {
  Image: ComponentWithRef<SkeletonImageProps>;
  Button: ComponentWithRef<SkeletonButtonProps>;
  Field: ComponentWithRef<SkeletonFieldProps>;
  Avatar: ComponentWithRef<SkeletonAvatarProps>;
  Text: ComponentWithRef<SkeletonTextProps>;
  Chip: ComponentWithRef<SkeletonChipProps>;
};

Skeleton.Image = SkeletonImage;

Skeleton.Button = SkeletonButton;

Skeleton.Field = SkeletonField;

Skeleton.Avatar = SkeletonAvatar;

Skeleton.Text = SkeletonText;

Skeleton.Chip = SkeletonChip;
