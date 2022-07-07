import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { HStack } from './HStack';

export default {
  title: 'HStack',
  component: HStack,
  args: {
    spacing: 20,
  },
} as ComponentMeta<typeof HStack>;

export const Basic: ComponentStory<typeof HStack> = props => (
  <HStack {...props}>
    <Box width={200} height={200} backgroundColor="primary" />
    <Box width={200} height={200} backgroundColor="primary" />
  </HStack>
);
