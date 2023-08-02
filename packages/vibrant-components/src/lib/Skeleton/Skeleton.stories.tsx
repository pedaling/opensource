import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '../VStack';
import { Skeleton } from './Skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
  args: {
    width: '100%',
    maxWidth: 200,
    height: 200,
    rounded: 'sm',
  },
} as ComponentMeta<typeof Skeleton>;

export const Basic: ComponentStory<typeof Skeleton> = props => <Skeleton {...props} />;

export const WithChildren: ComponentStory<typeof Skeleton> = props => (
  <Skeleton {...props}>
    <VStack p={10}>
      <Skeleton.Text typography="body1" />
    </VStack>
  </Skeleton>
);
