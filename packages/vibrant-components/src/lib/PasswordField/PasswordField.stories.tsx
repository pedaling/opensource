import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '../VStack';
import { PasswordField } from './PasswordField';

export default {
  title: 'PasswordField',
  component: PasswordField,
  args: {
    label: '비밀번호',
    helperText: '비밀번호을 입력해주세요',
    size: 'lg',
  },
} as ComponentMeta<typeof PasswordField>;

export const Basic: ComponentStory<typeof PasswordField> = props => (
  <VStack width="100%" p={20}>
    <PasswordField {...props} />
  </VStack>
);
