import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

type TextFieldProps = BaseInputProps<string> & {
  state?: 'default' | 'error';
  label?: string;
  helperText?: string;
};

export const withTextFieldVariation = withVariation<TextFieldProps>('TextField')();
