import { withVariation } from '@vibrant-ui/core';
import type { AutoCapitalizeOption, AutoCompleteOption, TextInputType } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

type TextFieldProps = BaseInputProps<string> & {
  type?: Exclude<TextInputType, 'password'>;
  state?: 'default' | 'error';
  label?: string;
  placeholder?: string;
  helperText?: string;
  autoComplete?: AutoCompleteOption;
  autoCapitalize?: AutoCapitalizeOption;
};

export const withTextFieldVariation = withVariation<TextFieldProps>('TextField')();
