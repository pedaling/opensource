import { useEffect, useRef } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import { useRadioGroup } from '../RadioGroupField/context/RadioGroupContext';
import type { RadioProps } from './RadioProps';

export function useRadio({ value, disabled, checked }: Pick<RadioProps, 'checked' | 'disabled' | 'value'>) {
  const { name, value: checkedValue, onChange, disabled: groupDisabled, state } = useRadioGroup();

  const isChecked = value === checkedValue;
  const isDisabled = groupDisabled || disabled;
  const prevCheckedRef = useRef<boolean>();

  useEffect(() => {
    if (!isDefined(checked) || checked === prevCheckedRef.current) {
      return;
    }

    if (checked) {
      onChange(value);
    }

    if (!checked && isChecked) {
      onChange('');
    }
  }, [checked, isChecked, onChange, value]);

  useEffect(() => {
    prevCheckedRef.current = checked;
  }, [checked, isChecked]);

  const handleChecked = () => {
    if (isChecked) {
      return;
    }

    onChange(isChecked ? '' : value);
  };

  return {
    name,
    isChecked,
    isDisabled,
    onChange: handleChecked,
    state,
  };
}
