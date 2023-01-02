import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonChip } from './SkeletonChip';

export default {
  title: 'Skeleton.Chip',
  component: SkeletonChip,
  args: {
    size: 'md',
  },
} as ComponentMeta<typeof SkeletonChip>;

export const Basic: ComponentStory<typeof SkeletonChip> = props => <SkeletonChip {...props} />;
