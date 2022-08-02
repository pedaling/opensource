import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { UnstyledTextInput } from './UnstyledTextInput';

export default {
  title: 'UnstyledTextInput',
  component: UnstyledTextInput,
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
} as ComponentMeta<typeof UnstyledTextInput>;

export const Basic: ComponentStory<typeof UnstyledTextInput> = props => <UnstyledTextInput {...props} />;
