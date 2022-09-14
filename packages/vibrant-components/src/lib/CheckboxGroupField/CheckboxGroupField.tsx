import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { CheckboxField } from '../CheckboxField';
import { VStack } from '../VStack';
import type { CheckboxFieldOption, CheckboxGroupFieldProps } from './CheckboxGroupFieldProps';
import { withCheckboxGroupFieldVariation } from './CheckboxGroupFieldProps';

export const CheckboxGroupField = withCheckboxGroupFieldVariation(
  ({ options, defaultValue, disabled = false, size = 'md', spacing = 16, onValueChange }) => {
    const [checkboxValue, setCheckboxValue] = useState(
      () =>
        defaultValue ?? options.reduce((prevValue, currentValue) => ({ ...prevValue, [currentValue.value]: false }), {})
    );

    useEffect(() => {
      if (defaultValue) {
        setCheckboxValue(defaultValue);
      }
    }, [defaultValue]);

    const handleChange = (targetValue: string) => {
      setCheckboxValue(prevCheckboxValue => {
        const nextCheckboxValue = { ...prevCheckboxValue, [targetValue]: !prevCheckboxValue[targetValue] };

        onValueChange?.(nextCheckboxValue, {
          allChecked: Object.keys(nextCheckboxValue).every(key => nextCheckboxValue[key]),
        });

        return nextCheckboxValue;
      });
    };

    return (
      <VStack spacing={spacing}>
        {options.map(({ value, ...checkboxFieldProps }) => (
          <CheckboxField
            key={value}
            defaultValue={checkboxValue[value]}
            disabled={disabled}
            size={size}
            onValueChange={() => handleChange(value)}
            {...checkboxFieldProps}
          />
        ))}
      </VStack>
    );
  }
) as unknown as <Value extends string, Options extends readonly CheckboxFieldOption<Value>[]>(
  props: CheckboxGroupFieldProps<Value, Options>
) => ReactElement;
