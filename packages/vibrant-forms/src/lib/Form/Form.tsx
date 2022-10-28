import type { FormEvent } from 'react';
import type { FieldValues as ReactHookFormFieldValues } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@vibrant-ui/core';
import type { FormProps } from './FormProps';

export const Form = <FieldValues extends ReactHookFormFieldValues>({
  children,
  formControlMethods,
  onSubmit,
  full = false,
  ...restProps
}: FormProps<FieldValues>) => {
  const hookFormMethods = useForm<FieldValues>();
  const methods = formControlMethods ?? hookFormMethods;

  return (
    <FormProvider {...methods}>
      <Box
        width={full ? '100%' : 'auto'}
        height={full ? '100%' : 'auto'}
        onSubmit={(e: FormEvent) => {
          e.stopPropagation();

          return onSubmit ? methods.handleSubmit(onSubmit)(e) : undefined;
        }}
        noValidate={true}
        as="form"
        {...restProps}
      >
        {children}
      </Box>
    </FormProvider>
  );
};
