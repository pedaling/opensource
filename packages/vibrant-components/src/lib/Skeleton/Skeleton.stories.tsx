import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
  args: {
    width: 200,
    height: 200,
    borderRadiusLevel: 2,
  },
} as ComponentMeta<typeof Skeleton>;

export const Basic: ComponentStory<typeof Skeleton> = props => <Skeleton {...props} />;
