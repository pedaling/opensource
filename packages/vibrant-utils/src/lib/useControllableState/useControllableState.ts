import { useCallback, useState } from 'react';
import { isDefined } from '../isDefined';
import { useCallbackRef } from '../useCallbackRef';

export type UseControllableStateProps<Value> = {
  value?: Value;
  defaultValue?: Value;
  onChange?: (value: Value) => void;
};

export function useControllableState<Value>({
  value: valueProp,
  defaultValue,
  onChange,
}: UseControllableStateProps<Value>) {
  const [uncontrolledValue, setUncontrolledValue] = useState<Value>(defaultValue as Value);
  const isControlled = isDefined(valueProp);
  const handleChange = useCallbackRef(onChange);

  const setValue = useCallback(
    (nextValue: Value) => {
      handleChange(nextValue);

      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
    },
    [isControlled, handleChange]
  );

  return [isControlled ? valueProp : uncontrolledValue, setValue] as const;
}
