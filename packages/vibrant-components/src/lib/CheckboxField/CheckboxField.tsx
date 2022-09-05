import { useEffect, useState } from 'react';
import { Body } from '../Body';
import { Checkbox } from '../Checkbox';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { VStack } from '../VStack';
import { withCheckboxFieldVariation } from './CheckboxFieldProps';

export const CheckboxField = withCheckboxFieldVariation(
  ({
    defaultChecked = false,
    disabled = false,
    onChange,
    label,
    helperText,
    labelLevel,
    helperTextLevel,
    labelColor,
    helperTextColor,
    ...restProps
  }) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    useEffect(() => {
      setIsChecked(defaultChecked);
    }, [defaultChecked]);

    const handleChange = () => {
      setIsChecked(prevIsChecked => {
        onChange?.(!prevIsChecked);

        return !prevIsChecked;
      });
    };

    return (
      <Pressable disabled={disabled} onClick={handleChange}>
        <HStack spacing={8}>
          <Checkbox defaultChecked={isChecked} disabled={disabled} {...restProps} />
          <VStack spacing={4} mt={3}>
            <Body level={labelLevel} color={labelColor}>
              {label}
            </Body>
            <Body level={helperTextLevel} color={helperTextColor}>
              {helperText}
            </Body>
          </VStack>
        </HStack>
      </Pressable>
    );
  }
);
