import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, PressableBox, Text } from '@vibrant-ui/core';
import { MountMotion } from './MountMotion';

export default {
  title: 'MountMotion',
  component: MountMotion,
  args: {
    mountAnimation: {
      opacity: {
        from: 0,
        to: 1,
      },
    },
    unmountAnimation: {
      opacity: {
        from: 1,
        to: 0,
      },
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} as ComponentMeta<typeof MountMotion>;

export const Basic: ComponentStory<typeof MountMotion> = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box alignItems="start">
      <PressableBox onClick={() => setIsOpen(!isOpen)} backgroundColor="primary" p={16}>
        <Text typography="body1">click</Text>
      </PressableBox>

      <MountMotion {...props} mount={isOpen}>
        <Box width={100} height={100} backgroundColor="informative" />
      </MountMotion>
    </Box>
  );
};
