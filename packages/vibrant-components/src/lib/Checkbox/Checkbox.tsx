import { useEffect, useState } from 'react';
import { Pressable } from '../Pressable';
import { withCheckboxVariation } from './CheckboxProps';

export const Checkbox = withCheckboxVariation(
  ({
    defaultValue = false,
    disabled = false,
    onValueChange,
    iconSize,
    CheckboxOnIconComponent,
    CheckboxOffIconComponent,
    iconFillColor,
    iconOutlineColor,
  }) => {
    const [isChecked, setIsChecked] = useState(defaultValue);

    useEffect(() => {
      setIsChecked(defaultValue);
    }, [defaultValue]);

    const handleChange = () => {
      setIsChecked(prevIsChecked => {
        onValueChange?.(!prevIsChecked);

        return !prevIsChecked;
      });
    };

    const IconComponent = isChecked ? CheckboxOnIconComponent : CheckboxOffIconComponent;

    return (
      <Pressable disabled={disabled} onClick={handleChange}>
        <IconComponent size={iconSize} fill={isChecked ? iconFillColor : iconOutlineColor} />
      </Pressable>
    );
  }
);
