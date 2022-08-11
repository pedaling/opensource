import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { RangePickerField } from './RangePickerField';

export default {
  title: 'RangePickerField',
  component: RangePickerField,
  args: {
    label: '범위 선택',
    placeholder: '0000/00/00 ~ 0000/00/00',
  },
} as ComponentMeta<typeof RangePickerField>;

export const Basic: ComponentStory<typeof RangePickerField> = props => <RangePickerField {...props} />;
