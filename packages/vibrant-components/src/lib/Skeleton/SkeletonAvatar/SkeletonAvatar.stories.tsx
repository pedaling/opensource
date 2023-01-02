import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonAvatar } from './SkeletonAvatar';

export default {
  title: 'Skeleton.Avatar',
  component: SkeletonAvatar,
  args: {
    size: 'xl',
  },
} as ComponentMeta<typeof SkeletonAvatar>;

export const Basic: ComponentStory<typeof SkeletonAvatar> = props => <SkeletonAvatar {...props} />;
