import { useEffect, useState } from 'react';
import { Pressable } from '../Pressable';
import { withCheckboxVariation } from './CheckboxProps';

export const Checkbox = withCheckboxVariation(
  ({
    checked = false,
    disabled = false,
    onChange,
    iconSize,
    CheckboxOnIconComponent,
    CheckboxOffIconComponent,
    iconFillColor,
    iconOutlineColor,
  }) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

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
