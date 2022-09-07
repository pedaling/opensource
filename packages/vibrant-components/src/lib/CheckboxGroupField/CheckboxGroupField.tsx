import { Fragment, useEffect, useState } from 'react';
import { CheckboxField } from '../CheckboxField';
import { VStack } from '../VStack';
import { withCheckboxGroupFieldVariation } from './CheckboxGroupFieldProps';

export const CheckboxGroupField = withCheckboxGroupFieldVariation(
  ({
    options,
    defaultValue = [],
    disabled = false,
    size = 'md',
    spacing = 16,
    renderItem = ({ checkboxFieldElement }) => checkboxFieldElement,
    onValueChange,
  }) => {
    const [checkedValueSet, setCheckedValueSet] = useState(new Set(defaultValue));

    useEffect(() => {
      setCheckedValueSet(new Set(defaultValue));
    }, [defaultValue]);

    const handleChange = (targetValue: string) => {
      setCheckedValueSet(prevCheckedValueSet => {
        const nextCheckedValueSet = new Set(prevCheckedValueSet);

        if (nextCheckedValueSet.has(targetValue)) {
          nextCheckedValueSet.delete(targetValue);
        } else {
          nextCheckedValueSet.add(targetValue);
        }

        onValueChange?.([...nextCheckedValueSet]);

        return nextCheckedValueSet;
      });
    };

    return (
      <VStack spacing={spacing}>
        {options.map(({ value, ...checkboxFieldProps }) => (
          <Fragment key={value}>
            {renderItem({
              checkboxFieldElement: (
                <CheckboxField
                  key={value}
                  defaultValue={checkedValueSet.has(value)}
                  disabled={disabled}
                  size={size}
                  onValueChange={() => handleChange(value)}
                  {...checkboxFieldProps}
                />
              ),
              isChecked: checkedValueSet.has(value),
              value,
              ...checkboxFieldProps,
            })}
          </Fragment>
        ))}
      </VStack>
    );
  }
);
