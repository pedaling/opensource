import { useEffect, useId, useState } from 'react';
import { PressableBox } from '@vibrant-ui/core';
import { Body } from '../Body';
import { Checkbox } from '../Checkbox';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { withCheckboxFieldVariation } from './CheckboxFieldProps';

export const CheckboxField = withCheckboxFieldVariation(
  ({
    defaultValue = false,
    disabled = false,
    onValueChange,
    label,
    helperText,
    renderContent,
    labelLevel,
    helperTextLevel,
    labelColor,
    helperTextColor,
    ...restProps
  }) => {
    const [isChecked, setIsChecked] = useState(defaultValue);

    const labelId = useId();

    useEffect(() => {
      setIsChecked(defaultValue);
    }, [defaultValue]);

    const handleChange = () => {
      setIsChecked(prevIsChecked => {
        let isPrevented = false;

        onValueChange?.({
          value: !prevIsChecked,
          prevent: () => {
            isPrevented = true;
          },
        });

        return isPrevented ? prevIsChecked : !prevIsChecked;
      });
    };

    return (
      <VStack>
        <HStack spacing={8} alignVertical={helperText ? 'start' : 'center'}>
          <Checkbox
            defaultValue={isChecked}
            disabled={disabled}
            onValueChange={handleChange}
            ariaLabelledBy={labelId}
            {...restProps}
          />
          <PressableBox disabled={disabled} onClick={handleChange}>
            <VStack spacing={4} mt={3}>
              <Body id={labelId} level={labelLevel} color={labelColor}>
                {label}
              </Body>
              {Boolean(helperText) && (
                <Body level={helperTextLevel} color={helperTextColor}>
                  {helperText}
                </Body>
              )}
            </VStack>
          </PressableBox>
        </HStack>
        {renderContent?.({
          checked: isChecked,
          label,
          disabled,
          helperText,
          indeterminate: restProps.indeterminate,
        })}
      </VStack>
    );
  }
);
