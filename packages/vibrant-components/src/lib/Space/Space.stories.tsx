import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { VStack } from '../VStack';
import { Space } from './Space';

export default {
  title: 'Space',
  component: Space,
  args: {
    height: 20,
  },
} as ComponentMeta<typeof Space>;

export const Basic: ComponentStory<typeof Space> = props => (
  <VStack>
    <Box width={200} height={200} backgroundColor="primary" />
    <Space {...props} />
    <Box width={200} height={200} backgroundColor="primary" />
  </VStack>
);
