import { Controller, useFormContext } from 'react-hook-form';
import { CardNumberField } from '@vibrant-ui/components';
import { withFormCardNumberFieldVariation } from './FormCardNumberFieldProps';

export const FormCardNumberField = withFormCardNumberFieldVariation(
  ({ name, rules, defaultValue, helperText, ...restProps }) => {
    const { control } = useFormContext();

    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value }, fieldState }) => (
          <CardNumberField
            {...restProps}
            helperText={fieldState.error?.message ?? helperText}
            state={fieldState.error?.message ? 'error' : 'default'}
            defaultValue={value}
            onBlur={onBlur}
            onValueChange={({ value, prevent }) => {
              onChange(value);

              prevent();
            }}
          />
        )}
      />
    );
  }
);
