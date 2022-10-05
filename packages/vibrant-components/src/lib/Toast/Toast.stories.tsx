import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { PressableBox, Text } from '@vibrant-ui/core';
import { Paper } from '../Paper';
import { useToast } from '../ToastProvider';
import { useToastProps } from '../ToastProvider/ToastProvider';
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
} as ComponentMeta<typeof Toast>;

export const Basic: ComponentStory<typeof Toast> = props => (
  <VStack mt={200} height="100%" width="100%" alignment="start">
    <Paper height="100%" width="100%" backgroundColor="background">
      <Toast {...props} />
    </Paper>
  </VStack>
);

export const ToastWithAnimation: ComponentStory<typeof Toast> = props => {
  const { showToast } = useToast();
  const toastProps = useToastProps();

  console.log(toastProps);

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
            onClick={() => {
              showToast(props);
            }}
          >
            <Text>Click me</Text>
          </PressableBox>
        </VStack>
      </Paper>
    </VStack>
  );
};
