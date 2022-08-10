import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextInput } from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    type: 'text',
  },
} as ComponentMeta<typeof TextInput>;

export const Basic: ComponentStory<typeof TextInput> = props => <TextInput {...props} />;
