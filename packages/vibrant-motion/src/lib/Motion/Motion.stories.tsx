import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Motion } from './Motion';

export default {
  title: 'Motion',
  component: Motion,
  args: {
    duration: 1000,
    loop: 'reverse',
    style: {
      x: {
        from: 0,
        to: 250,
      },
    },
  },
} as ComponentMeta<typeof Motion>;

export const Basic: ComponentStory<typeof Motion> = props => (
  <Motion {...props}>
    <Box width={150} height={150} backgroundColor="primary" borderRadius={20} />
  </Motion>
);
