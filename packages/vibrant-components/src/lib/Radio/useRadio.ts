import { useEffect, useRef } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import { useRadioGroup } from '../RadioGroupField/context/RadioGroupContext';
import type { RadioProps } from './RadioProps';

export function useRadio({ value, disabled, checked }: Pick<RadioProps, 'checked' | 'disabled' | 'value'>) {
  const { name, value: checkedValue, onValueChange, disabled: groupDisabled } = useRadioGroup();

  const isChecked = value === checkedValue;
  const isDisabled = disabled || groupDisabled;
  const prevCheckedRef = useRef(checked);

  useEffect(() => {
    if (!isDefined(checked) || checked === prevCheckedRef.current) {
      return;
    }

    if (checked) {
      onValueChange({ value });
    }

    if (!checked && isChecked) {
      onValueChange({ value: undefined });
    }
  }, [checked, isChecked, onValueChange, value]);

  useEffect(() => {
    prevCheckedRef.current = checked;
  }, [checked, isChecked]);

  const handleChecked = () => {
    if (isChecked) {
      return;
    }

    onValueChange({ value: isChecked ? undefined : value });
  };

  return {
    name,
    isChecked,
    isDisabled,
    onChange: handleChecked,
  };
}
