import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonText } from './SkeletonText';

export default {
  title: 'Skeleton.Text',
  component: SkeletonText,
  args: {
    typography: 'body1',
  },
} as ComponentMeta<typeof SkeletonText>;

export const Basic: ComponentStory<typeof SkeletonText> = props => <SkeletonText {...props} />;
