import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Transition } from './Transition';

export default {
  title: 'Transition',
  component: Transition,
  args: {
    animation: {
      transform: {
        translateX: 50,
      },
      opacity: 1,
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} as ComponentMeta<typeof Transition>;

export const Basic: ComponentStory<typeof Transition> = props => (
  <Transition {...props}>
    <Box width={100} height={100} backgroundColor="primary" />
  </Transition>
);
