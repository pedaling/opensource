import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Body } from '../Body';
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
    <Box width={100} minHeight={100} backgroundColor="primary" alignItems="center" justifyContent="center">
      <Body level={3}>1</Body>
    </Box>
    <Box width={100} minHeight={100} backgroundColor="primary" alignItems="center" justifyContent="center">
      <Body level={3}>2</Body>
    </Box>
    <Box width={200} minHeight={100} backgroundColor="primary" alignItems="center" justifyContent="center">
      <Body level={3}>3</Body>
    </Box>
    <Box width={100} minHeight={100} backgroundColor="primary" alignItems="center" justifyContent="center">
      <Body level={3}>4</Body>
    </Box>
    <Box width={100} minHeight={100} backgroundColor="primary" alignItems="center" justifyContent="center">
      <Body level={3}>5</Body>
    </Box>
  </HStack>
);
