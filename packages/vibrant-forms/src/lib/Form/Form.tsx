import type { FormEvent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type { FieldValues as ReactHookFormFieldValues } from 'react-hook-form';
import { Box } from '@vibrant-ui/core';
import type { FormProps } from './FormProps';
import { withFormVariation } from './FormProps';

export const Form = withFormVariation(({ children, formControlMethods, onSubmit, ...restProps }) => {
  const hookFormMethods = useForm<any>();
  const methods = formControlMethods ?? hookFormMethods;

  return (
    <FormProvider {...methods}>
      <Box
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
}) as <FieldValues extends ReactHookFormFieldValues>(props: FormProps<FieldValues>) => JSX.Element;
