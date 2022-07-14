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
        to: 500,
      },
    },
  },
} as ComponentMeta<typeof Motion>;

export const Basic: ComponentStory<typeof Motion> = props => (
  <Motion {...props}>
    <Box width={300} height={300} backgroundColor="primary" />
  </Motion>
);
