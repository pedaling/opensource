import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePickerDay } from './DatePickerDay';

export default {
  title: 'DatePickerDay',
  component: DatePickerDay,
  args: {
    day: new Date('2022-08-09'),
    otherMonth: false,
    active: false,
    range: false,
    today: true,
  },
} as ComponentMeta<typeof DatePickerDay>;

export const Basic: ComponentStory<typeof DatePickerDay> = props => <DatePickerDay {...props} />;
