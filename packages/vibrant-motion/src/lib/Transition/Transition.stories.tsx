import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Transition } from './Transition';

export default {
  title: 'Transition',
  component: Transition,
  args: {
    style: {
      x: 50,
    },
  },
} as ComponentMeta<typeof Transition>;

export const Basic: ComponentStory<typeof Transition> = props => (
  <Transition {...props}>
    <Box width={100} height={100} backgroundColor="primary" />
  </Transition>
);
