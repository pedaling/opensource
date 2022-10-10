import { withVariation } from '@vibrant-ui/core';
import type { AutoCapitalizeOption, AutoCompleteOption, ReactElementChild, TextInputType } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type TextFieldProps = BaseInputProps<string> & {
  type?: Exclude<TextInputType, 'password'>;
  state?: 'default' | 'error';
  label?: string;
  placeholder?: string;
  helperText?: string;
  autoFocus?: boolean;
  maxLength?: number;
  autoComplete?: AutoCompleteOption;
  autoCapitalize?: AutoCapitalizeOption;
  prefix?: string;
  suffix?: string;
  clearable?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  renderStart?: () => ReactElementChild;
  renderEnd?: () => ReactElementChild;
};

export const withTextFieldVariation = withVariation<TextFieldProps>('TextField')();
