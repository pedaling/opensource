import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Space } from '../Space';
import { VStack } from '../VStack';
import { RangePickerField } from './RangePickerField';

export default {
  title: 'RangePickerField',
  component: RangePickerField,
  args: {
    label: '범위 선택',
  },
} as ComponentMeta<typeof RangePickerField>;

export const Basic: ComponentStory<typeof RangePickerField> = props => (
  <VStack width="100%">
    <Space height={450} />
    <RangePickerField {...props} />
    <Space height={450} />
  </VStack>
);
