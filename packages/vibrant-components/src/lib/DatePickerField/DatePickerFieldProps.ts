import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type DatePickerFieldProps = BaseInputProps<Date> & {
  helperText?: string;
  state?: 'default' | 'error';
} & (
    | {
        label?: never;
        placeholder?: string;
      }
    | {
        label?: string;
        placeholder?: never;
      }
  );

export const withDatePickerFieldVariation = withVariation<DatePickerFieldProps>('DatePickerField')();
