import type { FieldValues as ReactHookFormFieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import type { ReactElementChildren } from '@vibrant-ui/core';

export type FormError = {
  type: string;
  message?: string;
  ref: { name: string };
};

export type FormProps<FieldValues extends ReactHookFormFieldValues> = {
  className?: string;
  children?: ReactElementChildren;
  formControlMethods?: UseFormReturn<FieldValues>;
  onSubmit?: SubmitHandler<FieldValues>;
  full?: boolean;
};
