import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type DatePickerFieldProps = BaseInputProps<Date> & {
  placeholder?: string;
};

export const withDatePickerFieldVariation = withVariation<DatePickerFieldProps>('DatePickerField')();
