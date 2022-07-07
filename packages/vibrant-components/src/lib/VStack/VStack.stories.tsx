import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { VStack } from './VStack';

export default {
  title: 'VStack',
  component: VStack,
  args: {
    spacing: 20,
  },
} as ComponentMeta<typeof VStack>;

export const Basic: ComponentStory<typeof VStack> = props => (
  <VStack {...props}>
    <Box width={200} height={200} backgroundColor="primary" />
    <Box width={200} height={200} backgroundColor="primary" />
  </VStack>
);
