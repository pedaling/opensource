import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@vibrant-ui/components';
import { withFormTextFieldVariation } from './FormTextFieldProps';

export const FormTextField = withFormTextFieldVariation(({ name, rules, defaultValue, helperText, ...restProps }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <TextField
          {...restProps}
          helperText={fieldState.error?.message ?? helperText}
          state={fieldState.error?.message ? 'error' : 'default'}
          defaultValue={value}
          onBlur={onBlur}
          onValueChange={({ value }) => onChange(value)}
        />
      )}
    />
  );
});
