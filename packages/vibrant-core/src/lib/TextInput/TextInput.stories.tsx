import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
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
  <Box width="100%">
    <Box p={10}>
      <TextInput
        placeholder="next"
        type="text"
        enterKeyType="next"
        outlineColor="black"
        outlineWidth={1}
        outlineStyle="solid"
      />
    </Box>
    <Box p={10}>
      <TextInput
        placeholder="send"
        type="text"
        enterKeyType="send"
        outlineColor="black"
        outlineWidth={1}
        outlineStyle="solid"
      />
    </Box>
    <Box p={10}>
      <TextInput
        placeholder="done"
        type="text"
        enterKeyType="done"
        outlineColor="black"
        outlineWidth={1}
        outlineStyle="solid"
      />
    </Box>
    <Box p={10}>
      <TextInput
        {...props}
        placeholder="search"
        enterKeyType="search"
        outlineColor="black"
        outlineWidth={1}
        outlineStyle="solid"
      />
    </Box>
    <Box p={10}>
      <TextInput
        placeholder="go"
        type="text"
        enterKeyType="go"
        outlineColor="black"
        outlineWidth={1}
        outlineStyle="solid"
      />
    </Box>
  </Box>
);
