import { withVariation } from '@vibrant-ui/core';

export type DatePickerProps =
  | {
      date: Date | undefined;
      rangeDate?: never;
      range?: false;
      onDateRangeSelect?: never;
      onDateSelect: (date: Date) => void;
    }
  | {
      date?: never;
      rangeDate: { start: Date | undefined; end: Date | undefined };
      range: true;
      onDateRangeSelect: (days: { start: Date | undefined; end: Date | undefined }) => void;
      onDateSelect?: never;
    };

export const withDatePickerVariation = withVariation<DatePickerProps>('DatePicker')();
