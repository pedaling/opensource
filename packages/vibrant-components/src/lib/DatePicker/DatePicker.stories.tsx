import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePicker } from './DatePicker';

export default {
  title: 'DatePicker',
  component: DatePicker,
  args: {
    range: false,
    date: new Date('2022-08-02'),
  },
} as ComponentMeta<typeof DatePicker>;

export const Basic: ComponentStory<typeof DatePicker> = props => <DatePicker {...props} />;

export const Range: ComponentStory<typeof DatePicker> = props => <DatePicker {...props} />;
Range.args = {
  range: true,
  rangeDate: {
    start: new Date('2022-08-02'),
    end: new Date('2022-08-24'),
  },
};
