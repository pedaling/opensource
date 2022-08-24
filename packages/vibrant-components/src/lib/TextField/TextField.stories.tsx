import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '../VStack';
import { TextField } from './TextField';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: '이메일',
    helperText: '이메일을 입력해주세요',
  },
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = props => (
  <VStack width="100%" p={20}>
    <TextField {...props} />
  </VStack>
);
