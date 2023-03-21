import type { ForwardedRef } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type RangePickerFieldRefValue = {
  focus: (_: { preventScroll?: boolean }) => void;
  blur: () => void;
};

export type RangePickerFieldProps = BaseInputProps<{ start: Date; end: Date } | undefined> & {
  ref: ForwardedRef<RangePickerFieldRefValue>;
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
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

export const withRangePickerFieldVariation = withVariation<RangePickerFieldProps>('RangePickerField')();
