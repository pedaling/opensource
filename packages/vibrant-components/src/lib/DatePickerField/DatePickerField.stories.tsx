import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Space } from '../Space';
import { VStack } from '../VStack';
import { DatePickerField } from './DatePickerField';

export default {
  title: 'DatePickerField',
  component: DatePickerField,
  args: {
    label: '날짜 선택',
  },
} as ComponentMeta<typeof DatePickerField>;

export const Basic: ComponentStory<typeof DatePickerField> = props => (
  <VStack width="100%">
    <Space height={450} />
    <DatePickerField {...props} />
    <Space height={450} />
  </VStack>
);
