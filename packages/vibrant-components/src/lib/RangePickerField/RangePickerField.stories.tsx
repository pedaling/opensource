import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Body } from '../Body';
import { Pressable } from '../Pressable';
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

export const WithForm: ComponentStory<typeof RangePickerField> = props => (
  <form
    style={{ width: '100%' }}
    onSubmit={event => {
      console.log('submit');

      event.preventDefault();
    }}
  >
    <Space height={450} />
    <RangePickerField {...props} />
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
