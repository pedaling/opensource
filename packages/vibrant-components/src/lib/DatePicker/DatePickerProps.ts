import { withVariation } from '@vibrant-ui/core';

export type DatePickerProps =
  | {
      date: Date | undefined;
      range?: false;
      onDateRangeSelect?: never;
      onDateSelect: (date: Date) => void;
      startDate?: never;
      endDate?: never;
    }
  | {
      date?: never;
      range: true;
      onDateRangeSelect: (startDate: Date, endDate: Date | undefined) => void;
      onDateSelect?: never;
      startDate: Date | undefined;
      endDate: Date | undefined;
    };

export const withDatePickerVariation = withVariation<DatePickerProps>('DatePicker')();
