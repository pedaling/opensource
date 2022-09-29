import { useEffect, useState } from 'react';
import { Body } from '../Body';
import { Checkbox } from '../Checkbox';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
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
        <Pressable disabled={disabled} onClick={handleChange}>
          <HStack spacing={8}>
            <Checkbox defaultValue={isChecked} disabled={disabled} onValueChange={handleChange} {...restProps} />
            <VStack spacing={4} mt={3}>
              <Body level={labelLevel} color={labelColor}>
                {label}
              </Body>
              {Boolean(helperText) && (
                <Body level={helperTextLevel} color={helperTextColor}>
                  {helperText}
                </Body>
              )}
            </VStack>
          </HStack>
        </Pressable>
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
