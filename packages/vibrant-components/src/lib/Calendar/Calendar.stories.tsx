import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Calendar } from './Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
  args: {
    range: false,
    date: new Date('2022-08-02'),
  },
} as ComponentMeta<typeof Calendar>;

export const Basic: ComponentStory<typeof Calendar> = props => <Calendar {...props} />;

export const Range: ComponentStory<typeof Calendar> = props => <Calendar {...props} />;

Range.args = {
  range: true,
  startDate: new Date('2022-08-02'),
  endDate: new Date('2022-08-24'),
};
