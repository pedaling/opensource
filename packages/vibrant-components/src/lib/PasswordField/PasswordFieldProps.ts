import type { AutoCompleteOption } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type PasswordFieldProps = {
  state?: 'default' | 'error' | 'success';
  label?: string;
  placeholder?: string;
  helperText?: string;
  autoFocus?: boolean;
  tabIndex?: number;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  autoComplete?: Extract<AutoCompleteOption, 'newPassword' | 'none' | 'password'>;
};

export const withPasswordFieldVariation = withVariation<PasswordFieldProps>('PasswordField')();
