import { withVariation } from '@vibrant-ui/core';

type PasswordFieldProps = {
  state?: 'default' | 'error';
  label?: string;
  placeholder?: string;
  helperText?: string;
  tabIndex?: number;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export const withPasswordFieldVariation = withVariation<PasswordFieldProps>('PasswordField')();
