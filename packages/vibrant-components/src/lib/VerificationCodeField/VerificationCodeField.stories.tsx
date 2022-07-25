import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VerificationCodeField } from './VerificationCodeField';

export default {
  title: 'VerificationCodeField',
  component: VerificationCodeField,
  args: {
    length: 6,
    state: 'default',
    errorMessage: '숫자코드가 맞지 않습니다. 다시 입력해주세요.',
  },
} as ComponentMeta<typeof VerificationCodeField>;

export const Basic: ComponentStory<typeof VerificationCodeField> = props => <VerificationCodeField {...props} />;
