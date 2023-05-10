import type { ForwardedRef } from 'react';
import type { ReactElementChild, ResponsiveValue, TextInputProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type SearchFieldProps = BaseInputProps<string> &
  Pick<TextInputProps, 'onSubmit'> & {
    size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
    id?: string;
    state?: 'default' | 'error';
    label?: string;
    placeholder?: string;
    helperText?: string;
    autoFocus?: boolean;
    maxLength?: number;
    clearable?: boolean;
    readOnly?: boolean;
    ref?: ForwardedRef<any>;
    testId?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    renderStart?: () => ReactElementChild;
  };

export const withSearchFieldVariation = withVariation<SearchFieldProps>('SearchField')();
