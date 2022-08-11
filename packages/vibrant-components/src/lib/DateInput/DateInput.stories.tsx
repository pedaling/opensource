import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DateInput } from './DateInput';

export default {
  title: 'DateInput',
  component: DateInput,
  args: {
    value: '2022-08-01',
    state: 'default',
    label: '날짜를 입력해주세요',
    helperText: '헬퍼 텍스트',
  },
} as ComponentMeta<typeof DateInput>;

export const Basic: ComponentStory<typeof DateInput> = props => <DateInput {...props} />;
