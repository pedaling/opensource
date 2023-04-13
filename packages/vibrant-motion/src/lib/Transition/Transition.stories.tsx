import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, PressableBox, Text } from '@vibrant-ui/core';
import { Transition } from './Transition';

export default {
  title: 'Transition',
  component: Transition,
  args: {
    animation: {
      top: [0, 10, 20],
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

export const withAction: ComponentStory<typeof Transition> = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isTransition, setTransition] = useState(false);

  return (
    <Box>
      <Transition
        {...props}
        {...(isTransition
          ? {
              animation: {
                top: [100, 200, 300],
                transform: {
                  translateX: 0,
                },
                opacity: 0.5,
              },
            }
          : {})}
      >
        <Box width={100} height={100} backgroundColor="primary" />
      </Transition>
      <PressableBox as="button" onClick={() => setTransition(!isTransition)}>
        <Text>Transition</Text>
      </PressableBox>
    </Box>
  );
};
