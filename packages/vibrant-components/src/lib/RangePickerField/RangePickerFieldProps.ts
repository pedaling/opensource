import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type RangePickerFieldProps = BaseInputProps<{ start: Date; end: Date }> & {
  placeholder?: string;
  label?: string;
  helperText?: string;
  state?: 'default' | 'error';
};

export const withRangePickerFieldVariation = withVariation<RangePickerFieldProps>('RangePickerField')();
