import type { ComponentProps, FC } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ConfigProvider } from '@vibrant-ui/core';
import { Calendar } from './Calendar';
import { calendarLocale } from '.';

export default {
  title: 'Calendar',
  component: Calendar,
  argTypes: {
    locale: {
      type: {
        name: 'enum',
        value: ['ko', 'en', 'ja'],
      },
      defaultValue: 'ko',
    },
  },
  args: {
    range: false,
    date: new Date('2022-08-02'),
  },
} as ComponentMeta<typeof Calendar>;

const LocalizedCalendar: FC<ComponentProps<typeof Calendar> & { locale?: 'en' | 'ja' | 'ko' }> = ({
  locale = 'ko',
  ...props
}) => (
  <ConfigProvider translation={{ calendar: calendarLocale[locale] }}>
    <Calendar {...props} />
  </ConfigProvider>
);

export const Basic: ComponentStory<typeof Calendar> = props => <LocalizedCalendar {...props} />;

export const Range: ComponentStory<typeof Calendar> = props => <LocalizedCalendar {...props} />;

Range.args = {
  range: true,
  startDate: new Date('2022-08-02'),
  endDate: new Date('2022-08-24'),
};
