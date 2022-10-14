import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { PressableBox, Text } from '@vibrant-ui/core';
import { Paper } from '../Paper';
import { useToast } from '../ToastProvider';
import { ToastRenderer } from '../ToastRenderer';
import { VStack } from '../VStack';
import { Toast } from './Toast';

export default {
  title: 'Toast',
  component: Toast,
  args: {
    kind: 'success',
    title: '커스텀 문구가 적용되었습니다',
    duration: 3000,
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
  const { showToast, closeToast } = useToast();

  return (
    <VStack mt={200} height="100%" width="100%">
      <Paper height="100%" width="100%" backgroundColor="surface2">
        <VStack flex={1} spacing={10}>
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
            <Text color="onPrimary">Default toast</Text>
          </PressableBox>
          <PressableBox
            width={100}
            height={50}
            alignItems="center"
            justifyContent="center"
            backgroundColor="error"
            mx="auto"
            onClick={() => {
              showToast({
                title: 'Error sample toast',
                kind: 'error',
                duration: 0,
                buttonText: '닫기',
                onButtonClick: closeToast,
              });
            }}
          >
            <Text color="onError">Error toast</Text>
          </PressableBox>
          <ToastRenderer />
        </VStack>
      </Paper>
    </VStack>
  );
};
