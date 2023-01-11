import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonButton } from './SkeletonButton';

export default {
  title: 'Skeleton.Button',
  component: SkeletonButton,
  args: {
    size: 'xl',
  },
} as ComponentMeta<typeof SkeletonButton>;

export const Basic: ComponentStory<typeof SkeletonButton> = props => <SkeletonButton {...props} />;
