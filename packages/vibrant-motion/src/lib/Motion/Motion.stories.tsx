import { useRef } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
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
  parameters: {
    chromatic: { disableSnapshot: true },
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
      <Box as="button" onClick={() => motionRef.current.start()}>
        Start
      </Box>
      <Box as="button" onClick={() => motionRef.current.start({ reverse: true })}>
        Start (Reverse)
      </Box>
      <Box as="button" onClick={() => motionRef.current.start({ reset: false })}>
        Start (with No Reset)
      </Box>
      <Box as="button" onClick={() => motionRef.current.pause()}>
        Pause
      </Box>
      <Box as="button" onClick={() => motionRef.current.resume()}>
        Resume
      </Box>
      <Motion {...props} motionRef={motionRef}>
        <Box width={150} height={150} backgroundColor="primary" borderRadius={20} />
      </Motion>
    </Box>
  );
};
