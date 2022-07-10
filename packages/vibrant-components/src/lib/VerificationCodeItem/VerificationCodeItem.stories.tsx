import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { VerificationCodeItem } from './VerificationCodeItem';

export default {
  title: 'VerificationCodeItem',
  component: VerificationCodeItem,
  argTypes: {
    inputId: {
      defaultValue: 'input',
      control: 'text',
    },
    value: {
      defaultValue: '1',
      control: 'text',
    },
    state: {
      defaultValue: 'default',
      control: {
        type: 'radio',
        options: ['default', 'error'],
      },
    },
    active: {
      defaultValue: false,
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof VerificationCodeItem>;

export const Basic: ComponentStory<typeof VerificationCodeItem> = props => <VerificationCodeItem {...props} />;
