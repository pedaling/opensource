import type { ComponentStory } from '@storybook/react';
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

export const Basic: ComponentStory<typeof Toast> = props => (
  <VStack mt={200} height="100%" width="100%" alignment="start">
    <Paper height="100%" width="100%" backgroundColor="background">
      <Toast {...props} />
    </Paper>
  </VStack>
);
