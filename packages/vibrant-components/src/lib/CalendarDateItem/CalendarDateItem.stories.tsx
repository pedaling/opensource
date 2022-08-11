import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CalenderDateItem } from './CalenderDateItem';

export default {
  title: 'CalendarDateItem',
  component: CalenderDateItem,
  args: {
    date: new Date('2022-08-09'),
    otherMonth: false,
    active: false,
    range: false,
    today: true,
  },
} as ComponentMeta<typeof CalenderDateItem>;

export const Basic: ComponentStory<typeof CalenderDateItem> = props => <CalenderDateItem {...props} />;
