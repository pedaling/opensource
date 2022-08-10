import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DateInput } from './DateInput';

export default {
  title: 'DateInput',
  component: DateInput,
  args: {
    value: '2022-08-01',
  },
} as ComponentMeta<typeof DateInput>;

export const Basic: ComponentStory<typeof DateInput> = props => <DateInput {...props} />;
