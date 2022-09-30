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
    title: '커스텀 문구가 적용되었습니다',
    duration: 2500,
    onButtonClick: () => {},
    buttonText: '미리보기',
  },
};

export const Basic: ComponentStory<typeof Toast> = props => {
  const [open, setOpen] = useState(false);

  return (
    <VStack mt={200} height="100%" width="100%">
      <Paper height="100%" width="100%" backgroundColor="background">
        <VStack flex={1}>
          <PressableBox
            width={100}
            height={50}
            alignItems="center"
            justifyContent="center"
            backgroundColor="primary"
            mx="auto"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Text>Click me</Text>
          </PressableBox>

          <Toast
            {...props}
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          />
        </VStack>
      </Paper>
    </VStack>
  );
};
