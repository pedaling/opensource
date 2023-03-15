import { withVariation } from '@vibrant-ui/core';

export type CalendarProps =
  | {
      date: Date | undefined;
      range?: false;
      onDateRangeSelect?: never;
      onDateSelect: (date: Date) => void;
      startDate?: never;
      endDate?: never;
      testId?: string;
    }
  | {
      date?: never;
      range: true;
      onDateRangeSelect: (startDate: Date, endDate: Date | undefined) => void;
      onDateSelect?: never;
      startDate: Date | undefined;
      endDate: Date | undefined;
      testId?: string;
    };

export const withCalendarVariation = withVariation<CalendarProps>('Calendar')();
