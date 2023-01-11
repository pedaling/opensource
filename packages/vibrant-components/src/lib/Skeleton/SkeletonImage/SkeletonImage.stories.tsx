import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonImage } from './SkeletonImage';

export default {
  title: 'Skeleton.Image',
  component: SkeletonImage,
  args: {
    width: 300,
    ratio: 1,
  },
} as ComponentMeta<typeof SkeletonImage>;

export const Basic: ComponentStory<typeof SkeletonImage> = props => <SkeletonImage {...props} />;
