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
  <VStack {...props} flex={1} width="100%" height="100%">
    <Box width={100} height={100} backgroundColor="primary" />
    <Box width={100} height={100} backgroundColor="primary" />
    <Box width={200} height={100} backgroundColor="primary" />
    <Box width={100} height={100} backgroundColor="primary" />
    <Box width={100} height={100} backgroundColor="primary" />
  </VStack>
);
