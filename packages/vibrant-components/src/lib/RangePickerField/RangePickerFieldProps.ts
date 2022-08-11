import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type RangePickerFieldProps = BaseInputProps<{ start: Date; end: Date }> & {
  placeholder?: string;
  label?: string;
};

export const withRangePickerFieldVariation = withVariation<RangePickerFieldProps>('RangePickerField')();
