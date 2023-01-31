import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from '../VStack';
import { CardNumberField } from './CardNumberField';

export default {
  title: 'CardNumberField',
  component: CardNumberField,
  args: {
    label: '카드번호',
    helperText: '카드번호를 입력해주세요',
  },
  argTypes: {
    onValueChange: { controls: false },
    onFocus: { controls: false },
    onBlur: { controls: false },
  },
} as ComponentMeta<typeof CardNumberField>;

export const Basic: ComponentStory<typeof CardNumberField> = props => (
  <VStack width="100%" p={20}>
    <CardNumberField {...props} />
  </VStack>
);
