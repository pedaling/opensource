import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type RangePickerFieldProps = BaseInputProps<{ start: Date; end: Date }> & {
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

export const withRangePickerFieldVariation = withVariation<RangePickerFieldProps>('RangePickerField')();
