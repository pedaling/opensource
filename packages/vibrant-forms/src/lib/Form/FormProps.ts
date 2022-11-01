import type { FieldValues as ReactHookFormFieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import type { ReactElementChildren, SizingSystemProps } from '@vibrant-ui/core';

export type FormProps<FieldValues extends ReactHookFormFieldValues> = SizingSystemProps & {
  children?: ReactElementChildren;
  formControlMethods?: UseFormReturn<FieldValues>;
  onSubmit?: SubmitHandler<FieldValues>;
};
