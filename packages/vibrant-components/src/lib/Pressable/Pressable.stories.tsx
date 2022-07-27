import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Pressable } from './Pressable';

export default {
  title: 'Pressable',
  component: Pressable,
  args: {
    disabled: false,
    overlayColor: 'primary',
    interactions: ['focus', 'hover', 'active'],
    as: 'button',
  },
} as ComponentMeta<typeof Pressable>;

export const Basic: ComponentStory<typeof Pressable> = props => (
  <Pressable {...props}>
    <Box width={200} height={200} borderWidth={1} borderStyle="solid" borderColor="primary" />
  </Pressable>
);
