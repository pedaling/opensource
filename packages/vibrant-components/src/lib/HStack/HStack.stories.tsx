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
  <HStack {...props} flex={1} width="100%" height="100%">
    <Box width={100} minHeight={100} backgroundColor="primary" />
    <Box width={100} minHeight={100} backgroundColor="primary" />
    <Box width={200} minHeight={100} backgroundColor="primary" />
    <Box width={100} minHeight={100} backgroundColor="primary" />
    <Box width={100} minHeight={100} backgroundColor="primary" />
  </HStack>
);
