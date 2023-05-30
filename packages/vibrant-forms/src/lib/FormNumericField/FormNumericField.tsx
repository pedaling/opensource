import { Controller, useFormContext } from 'react-hook-form';
import { NumericField } from '@vibrant-ui/components';
import { withFormNumericFieldVariation } from './FormNumericFieldProps';

export const FormNumericField = withFormNumericFieldVariation(({ name, rules, defaultValue, ...restProps }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <NumericField {...restProps} onValueChange={({ value }) => onChange(value)} defaultValue={value} />
      )}
    />
  );
});
