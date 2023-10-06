import { propVariant, withVariation } from '@vibrant-ui/core';
import type { AutoCompleteOption, ResponsiveValue } from '@vibrant-ui/core';

export type PasswordFieldProps = {
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
  id?: string;
  state?: 'default' | 'error' | 'success';
  label?: string;
  placeholder?: string;
  helperText?: string;
  autoFocus?: boolean;
  maxLength?: number;
  tabIndex?: number;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  autoComplete?: Extract<AutoCompleteOption, 'newPassword' | 'password'>;
  testId?: string;
  pattern?: RegExp;
};

export const withPasswordFieldVariation = withVariation<PasswordFieldProps>('PasswordField')(
  propVariant({
    props: [
      {
        name: 'size',
        default: 'lg',
        responsive: true,
        keep: true,
      },
    ],
    variants: {
      lg: {
        iconSize: 20,
      },
      md: {
        iconSize: 20,
      },
      sm: {
        iconSize: 16,
      },
    } as const,
  })
);
