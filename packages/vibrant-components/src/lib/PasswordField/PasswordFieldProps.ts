import { withVariation } from '@vibrant-ui/core';
import type { AutoCompleteOption, ResponsiveValue } from '@vibrant-ui/core';

export type PasswordFieldProps = {
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
  id?: string;
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
  autoComplete?: Extract<AutoCompleteOption, 'newPassword' | 'password'>;
};

export const withPasswordFieldVariation = withVariation<PasswordFieldProps>('PasswordField')();
