import { useEffect, useState } from 'react';
import { PressableBox } from '@vibrant-ui/core';
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
    ariaLabelledBy,
    testId = 'checkbox',
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

    const IconComponent = isChecked ? CheckboxOnIconComponent : CheckboxOffIconComponent;

    return (
      <PressableBox
        role="checkbox"
        data-testid={testId}
        disabled={disabled}
        onClick={handleChange}
        ariaLabelledBy={ariaLabelledBy}
        ariaChecked={isChecked}
      >
        <IconComponent size={iconSize} fill={isChecked ? iconFillColor : iconOutlineColor} />
      </PressableBox>
    );
  }
);
