import { propVariant, withVariation } from '@vibrant-ui/core';

export type CalendarDateItemProps = {
  otherMonth: boolean;
  active: boolean;
  date: Date;
  today: boolean;
  onClick: (date: Date) => void;
  range: 'end' | 'start' | false | true;
  testId?: string;
};

export const withCalendarDateItemVariation = withVariation<CalendarDateItemProps>('CalendarDateItem')(
  propVariant({
    props: [
      {
        name: 'otherMonth',
      },
      {
        name: 'active',
        keep: true,
      },
    ],
    variants: ({ otherMonth, active }) => {
      if (active) {
        return {
          color: 'onPrimary' as const,
        };
      }

      if (otherMonth) {
        return {
          color: 'onView2' as const,
        };
      }

      return {
        color: 'onView1' as const,
      };
    },
  }),
  propVariant({
    props: [
      {
        name: 'active',
      },
    ],
    variants: {
      true: {
        borderRadius: '50%',
        backgroundColor: 'primary',
      },
      false: {},
    } as const,
  })
);
