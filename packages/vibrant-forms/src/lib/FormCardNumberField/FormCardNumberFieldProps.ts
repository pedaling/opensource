import type { CardNumberFieldProps } from '@vibrant-ui/components';
import { withVariation } from '@vibrant-ui/core';
import type { FormFieldProps } from '../../types/BaseFormFieldProps';

export type FormCardNumberFieldProps = FormFieldProps<
  Omit<CardNumberFieldProps, 'onBlur' | 'onFocus' | 'onValueChange' | 'state'>
>;

export const withFormCardNumberFieldVariation = withVariation<FormCardNumberFieldProps>('FormCardNumberField')();
