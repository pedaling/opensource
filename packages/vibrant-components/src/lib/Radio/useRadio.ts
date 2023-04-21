import { useEffect, useRef } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import { useRadioGroup } from '../RadioGroupField/context/RadioGroupContext';
import type { RadioProps } from './RadioProps';

export function useRadio({ value, disabled, checked }: Pick<RadioProps, 'checked' | 'disabled' | 'value'>) {
  const { name, value: checkedValue, onValueChange, disabled: groupDisabled, state } = useRadioGroup();

  const isChecked = value === checkedValue;
  const isDisabled = groupDisabled || disabled;
  const prevCheckedRef = useRef<boolean>();

  useEffect(() => {
    if (!isDefined(checked) || checked === prevCheckedRef.current) {
      return;
    }

    if (checked) {
      onValueChange(value);
    }

    if (!checked && isChecked) {
      onValueChange('');
    }
  }, [checked, isChecked, onValueChange, value]);

  useEffect(() => {
    prevCheckedRef.current = checked;
  }, [checked, isChecked]);

  const handleCheckedChange = () => {
    if (isChecked) {
      return;
    }

    onValueChange(isChecked ? '' : value);
  };

  return {
    name,
    isChecked,
    isDisabled,
    onChange: handleCheckedChange,
    state,
  };
}
