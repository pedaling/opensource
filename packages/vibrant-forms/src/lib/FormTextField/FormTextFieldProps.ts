import type { TextFieldProps } from '@vibrant-ui/components';
import { withVariation } from '@vibrant-ui/core';
import type { FormFieldProps } from '../../types/BaseFormFieldProps';

export type FormTextFieldProps = FormFieldProps<Omit<TextFieldProps, 'onBlur' | 'onFocus' | 'onValueChange' | 'state'>>;

export const withFormTextFieldVariation = withVariation<FormTextFieldProps>('FormTextField')();
