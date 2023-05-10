import type { ForwardedRef } from 'react';
import type {
  AutoCapitalizeOption,
  AutoCompleteOption,
  ReactElementChild,
  ResponsiveValue,
  TextInputProps,
  TextInputType,
} from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type TextFieldProps = BaseInputProps<string> &
  Pick<TextInputProps, 'onSubmit'> & {
    size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
    id?: string;
    type?: Exclude<TextInputType, 'password' | 'search'>;
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
    readOnly?: boolean;
    ref?: ForwardedRef<any>;
    testId?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    renderStart?: () => ReactElementChild;
    renderEnd?: () => ReactElementChild;
  };

export const withTextFieldVariation = withVariation<TextFieldProps>('TextField')();
