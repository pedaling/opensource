import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextSkeleton } from './TextSkeleton';

export default {
  title: 'Skeleton.Text',
  component: TextSkeleton,
  args: {
    typography: 'body1',
  },
} as ComponentMeta<typeof TextSkeleton>;

export const Basic: ComponentStory<typeof TextSkeleton> = props => <TextSkeleton {...props} />;
