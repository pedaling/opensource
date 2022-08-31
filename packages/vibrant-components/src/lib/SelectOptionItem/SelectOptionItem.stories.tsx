import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectOptionItem } from './SelectOptionItem';

export default {
  title: 'SelectOptionItem',
  component: SelectOptionItem,
  args: {
    disabled: false,
    active: false,
  },
} as ComponentMeta<typeof SelectOptionItem>;

export const Basic: ComponentStory<typeof SelectOptionItem> = props => (
  <SelectOptionItem {...props}>데일리 원피스 제작 올인원 패키지</SelectOptionItem>
);
