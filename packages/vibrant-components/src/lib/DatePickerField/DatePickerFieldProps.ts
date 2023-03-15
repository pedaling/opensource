import type { ForwardedRef } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type DatePickerFieldRefValue = {
  focus: (_: { preventScroll?: boolean }) => void;
  blur: () => void;
};

export type DatePickerFieldProps = BaseInputProps<Date | undefined> & {
  ref?: ForwardedRef<DatePickerFieldRefValue>;
  helperText?: string;
  state?: 'default' | 'error';
  onOpen?: () => void;
  zIndex?: number;
  autoFocus?: boolean;
  testId?: string;
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
