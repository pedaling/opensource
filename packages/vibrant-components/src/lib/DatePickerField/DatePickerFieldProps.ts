import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type DatePickerFieldProps = BaseInputProps<Date | undefined> & {
  helperText?: string;
  state?: 'default' | 'error';
  onOpen?: () => void;
  zIndex?: number;
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
