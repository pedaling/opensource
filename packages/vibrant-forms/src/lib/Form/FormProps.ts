import type { FieldValues as ReactHookFormFieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import type { ReactElementChildren } from '@vibrant-ui/core';

export type FormProps<FieldValues extends ReactHookFormFieldValues> = {
  children?: ReactElementChildren;
  formControlMethods?: UseFormReturn<FieldValues>;
  onSubmit?: SubmitHandler<FieldValues>;
  full?: boolean;
};
