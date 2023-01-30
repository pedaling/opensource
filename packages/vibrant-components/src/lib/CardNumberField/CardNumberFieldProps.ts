import type { ReactElementChild } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

type CardNumberFieldProps = BaseInputProps<string> & {
  id?: string;
  state?: 'default' | 'error';
  label?: string;
  placeholder?: string;
  helperText?: string;
  separator?: string;
  clearable?: boolean;
  readOnly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  renderStart?: () => ReactElementChild;
};

export const withCardNumberFieldVariation = withVariation<CardNumberFieldProps>('CardNumberField')();
