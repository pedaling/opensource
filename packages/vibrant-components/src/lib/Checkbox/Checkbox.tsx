import { useEffect, useState } from 'react';
import { Pressable } from '../Pressable';
import { withCheckboxVariation } from './CheckboxProps';

export const Checkbox = withCheckboxVariation(
  ({
    defaultChecked = false,
    disabled = false,
    onChange,
    iconSize,
    CheckboxOnIconComponent,
    CheckboxOffIconComponent,
    iconFillColor,
    iconOutlineColor,
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

    const IconComponent = isChecked ? CheckboxOnIconComponent : CheckboxOffIconComponent;

    return (
      <Pressable disabled={disabled} onClick={handleChange}>
        <IconComponent size={iconSize} fill={isChecked ? iconFillColor : iconOutlineColor} />
      </Pressable>
    );
  }
);
