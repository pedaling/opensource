import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body } from '../Body';
import { Pressable } from '../Pressable';
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

export const WithForm: ComponentStory<typeof DatePickerField> = props => (
  <form
    style={{ width: '100%' }}
    onSubmit={event => {
      console.log('submit');

      event.preventDefault();
    }}
  >
    <Space height={450} />
    <DatePickerField {...props} />
    <Space height={50} />
    <Pressable
      type="submit"
      width="100%"
      backgroundColor="primary"
      py={15}
      borderRadiusLevel={1}
      overlayColor="onPrimary"
      interactions={['hover', 'focus', 'active']}
    >
      <Body color="onPrimary" textAlign="center" level={1} weight="bold">
        submit
      </Body>
    </Pressable>
    <Space height={450} />
  </form>
);
