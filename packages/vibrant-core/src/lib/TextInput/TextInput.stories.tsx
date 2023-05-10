import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '@vibrant-ui/components';
import { TextInput } from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    type: 'text',
  },
} as ComponentMeta<typeof TextInput>;

export const Basic: ComponentStory<typeof TextInput> = props => <TextInput {...props} />;

export const withEnterKey: ComponentStory<typeof TextInput> = props => (
  <VStack width="80%" spacing={16} p={20}>
    <TextInput
      placeholder="next"
      type="text"
      enterKeyType="next"
      outlineColor="black"
      outlineWidth={1}
      outlineStyle="solid"
    />
    <TextInput
      placeholder="send"
      type="text"
      enterKeyType="send"
      outlineColor="black"
      outlineWidth={1}
      outlineStyle="solid"
    />
    <TextInput
      placeholder="done"
      type="text"
      enterKeyType="done"
      outlineColor="black"
      outlineWidth={1}
      outlineStyle="solid"
    />
    <TextInput
      {...props}
      placeholder="search"
      enterKeyType="search"
      outlineColor="black"
      outlineWidth={1}
      outlineStyle="solid"
    />
    <TextInput
      placeholder="go"
      type="text"
      enterKeyType="go"
      outlineColor="black"
      outlineWidth={1}
      outlineStyle="solid"
    />
  </VStack>
);
