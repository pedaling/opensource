import { useRef } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, PressableBox, Text } from '@vibrant-ui/core';
import { Motion } from './Motion';
import type { MotionRefValue } from './MotionProps';

export default {
  title: 'Motion',
  component: Motion,
  args: {
    duration: 1000,
    animation: {
      x: {
        from: 0,
        to: 250,
      },
      backgroundColor: {
        from: 'primary',
        to: 'informative',
      },
    },
  },
} as ComponentMeta<typeof Motion>;

export const Basic: ComponentStory<typeof Motion> = props => (
  <Motion {...props}>
    <Box width={150} height={150} backgroundColor="primary" borderRadius={20} />
  </Motion>
);

Basic.args = {
  loop: 'reverse',
};

export const WithRef: ComponentStory<typeof Motion> = props => {
  const motionRef = useRef<MotionRefValue>();

  return (
    <Box>
      <PressableBox as="button" onClick={() => motionRef.current?.start()}>
        <Text>Start</Text>
      </PressableBox>
      <PressableBox as="button" onClick={() => motionRef.current?.pause()}>
        <Text>Pause</Text>
      </PressableBox>
      <PressableBox as="button" onClick={() => motionRef.current?.resume()}>
        <Text>Resume</Text>
      </PressableBox>
      <Motion {...props} ref={motionRef}>
        <Box width={150} height={150} backgroundColor="primary" borderRadius={20} />
      </Motion>
    </Box>
  );
};
