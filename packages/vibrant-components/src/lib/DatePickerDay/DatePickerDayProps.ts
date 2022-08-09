import { propVariant, withVariation } from '@vibrant-ui/core';

export type DatePickerDayProps = {
  otherMonth: boolean;
  active: boolean;
  day: Date;
  today: boolean;
  onClick: (day: Date) => void;
  range: 'end' | 'start' | false | true;
};

export const withDatePickerDayVariation = withVariation<DatePickerDayProps>('DatePickerDay')(
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
