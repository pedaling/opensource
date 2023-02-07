import type { ForwardedRef } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type RangePickerFieldRefValue = {
  focus: () => void;
  blur: () => void;
};

export type RangePickerFieldProps = BaseInputProps<{ start: Date; end: Date } | undefined> & {
  ref: ForwardedRef<RangePickerFieldRefValue>;
  helperText?: string;
  state?: 'default' | 'error';
  onOpen?: () => void;
  zIndex?: number;
  autoFocus?: boolean;
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

export const withRangePickerFieldVariation = withVariation<RangePickerFieldProps>('RangePickerField')();
