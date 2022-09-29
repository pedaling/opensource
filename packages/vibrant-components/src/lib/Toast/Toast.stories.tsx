import { useState } from 'react';
import type { ComponentStory } from '@storybook/react';
import { PressableBox, Text } from '@vibrant-ui/core';
import { Paper } from '../Paper';
import { VStack } from '../VStack';
import { Toast } from './Toast';

export default {
  title: 'Toast',
  component: Toast,
  args: {
    kind: 'success',
    title: '킴클원님의 친구 초대로 캐시 4,000원을 받았어요!',
    duration: 1000,
    buttonTitle: '확인',
    onButtonClick: () => {},
  },
};

export const Basic: ComponentStory<typeof Toast> = props => {
  const [open, setOpen] = useState(false);

  return (
    <VStack mt={200} height="100%" width="100%">
      <Paper height="100%" width="100%" backgroundColor="surface2">
        <VStack flex={1}>
          <PressableBox
            width={100}
            height={50}
            alignItems="center"
            justifyContent="center"
            backgroundColor="primary"
            mx="auto"
            onClick={() => setOpen(!open)}
          >
            <Text>Click me</Text>
          </PressableBox>

          <Toast
            {...props}
            open={open}
            onClose={() => {
              props.onClose?.();

              setOpen(false);
            }}
          />
        </VStack>
      </Paper>
    </VStack>
  );
};
