import type { FormEvent } from 'react';
import type { FieldValues as ReactHookFormFieldValues } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@vibrant-ui/core';
import type { FormProps } from './FormProps';

export const Form = <FieldValues extends ReactHookFormFieldValues>({
  className,
  children,
  formControlMethods,
  onSubmit,
  full = false,
  ...rest
}: FormProps<FieldValues>) => {
  const hookFormMethods = useForm<FieldValues>({ mode: 'onChange' });
  const methods = formControlMethods ?? hookFormMethods;

  return (
    <FormProvider {...methods}>
      <Box
        style={{ width: `${full ? '100%' : 'auto'}`, height: `${full ? '100%' : 'auto'}` }}
        onSubmit={(e: FormEvent) => {
          e.stopPropagation();

          return onSubmit ? methods.handleSubmit(onSubmit)(e) : undefined;
        }}
        className={className}
        noValidate={true}
        as="form"
        {...rest}
      >
        {children}
      </Box>
    </FormProvider>
  );
};
