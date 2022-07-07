import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Stack } from './Stack';

export default {
  title: 'Stack',
  component: Stack,
  args: {
    direction: 'vertical',
    spacing: 20,
  },
} as ComponentMeta<typeof Stack>;

export const Basic: ComponentStory<typeof Stack> = props => (
  <Stack {...props}>
    <Box width={200} height={200} backgroundColor="primary" borderRadius={12} />
    <Box width={200} height={200} backgroundColor="primary" borderRadius={12} />
  </Stack>
);
