import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePickerField } from './DatePickerField';

export default {
  title: 'DatePickerField',
  component: DatePickerField,
  args: {
    placeholder: '0000-00-00',
    label: '날짜 선택',
  },
} as ComponentMeta<typeof DatePickerField>;

export const Basic: ComponentStory<typeof DatePickerField> = props => <DatePickerField {...props} />;
