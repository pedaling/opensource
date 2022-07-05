import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
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

export const Basic: ComponentStory<typeof Input> = props => (
  <Box>
    <Input {...props} />
    <Input />
  </Box>
);
