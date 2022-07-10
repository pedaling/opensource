import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { VerificationCodeItem } from './VerificationCodeItem';

export default {
  title: 'VerificationCodeItem',
  component: VerificationCodeItem,
  args: {
    inputId: 'input',
    value: '1',
    state: 'default',
    active: false,
  },
} as ComponentMeta<typeof VerificationCodeItem>;

export const Basic: ComponentStory<typeof VerificationCodeItem> = props => <VerificationCodeItem {...props} />;
