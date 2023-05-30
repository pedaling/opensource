import type { NumericFieldProps } from '@vibrant-ui/components';
import { withVariation } from '@vibrant-ui/core';
import type { FormFieldProps } from '../../types/BaseFormFieldProps';

export type FormNumericFieldProps = FormFieldProps<
  Omit<NumericFieldProps, 'onBlur' | 'onFocus' | 'onValueChange' | 'state'>
>;

export const withFormNumericFieldVariation = withVariation<FormNumericFieldProps>('FormNumericField')();
