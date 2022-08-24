import type { TextInputType } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

type TextFieldProps = BaseInputProps<string> & {
  type?: Exclude<TextInputType, 'password'>;
  state?: 'default' | 'error';
  label?: string;
  placeholder?: string;
  helperText?: string;
};

export const withTextFieldVariation = withVariation<TextFieldProps>('TextField')();
