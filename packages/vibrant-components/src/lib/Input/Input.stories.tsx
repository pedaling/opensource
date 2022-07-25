import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    allowPattern: {
      defaultValue: /\d/,
      control: false,
    },
    onFocus: {
      action: 'onFocus',
    },
    onBlur: {
      action: 'onBlur',
    },
    onKeyPress: {
      action: 'onKeyPress',
    },
    onValueChange: {
      action: 'onValueChange',
    },
  },
} as ComponentMeta<typeof Input>;

export const Basic: ComponentStory<typeof Input> = props => <Input {...props} />;
