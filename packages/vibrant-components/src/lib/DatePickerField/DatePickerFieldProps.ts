import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type DatePickerFieldProps = BaseInputProps<Date> & {
  placeholder?: string;
  label?: string;
  helperText?: string;
  state?: 'default' | 'error';
};

export const withDatePickerFieldVariation = withVariation<DatePickerFieldProps>('DatePickerField')();
