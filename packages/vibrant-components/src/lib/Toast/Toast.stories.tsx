import { useState } from 'react';
import type { ComponentStory } from '@storybook/react';
import { PressableBox, Text } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { FloatingActionButton } from '../FloatingActionButton';
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
    buttonText: '미리보기',
    onButtonClick: () => {
      console.log('hh');
    },
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

export const PositionCheck: ComponentStory<typeof Toast> = props => {
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
          <FloatingActionButton position="right" IconComponent={Icon.Add.Fill} onClick={() => {}} />
        </VStack>
      </Paper>
    </VStack>
  );
};
