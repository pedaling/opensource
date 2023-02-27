import { useCallback, useEffect, useRef, useState } from 'react';
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
  const [valueState, setValueState] = useState<Value>(defaultValue as Value);
  const isControlled = isDefined(valueProp);
  const handleChange = useCallbackRef(onChange);
  const valueRef = useRef(isControlled ? valueProp : valueState);

  const setValue = useCallback(
    (nextValue: Value) => {
      if (valueRef.current === nextValue) {
        return;
      }

      handleChange(nextValue);

      if (!isControlled) {
        setValueState(nextValue);
      }
    },
    [handleChange, isControlled]
  );

  useEffect(() => {
    valueRef.current = isControlled ? valueProp : valueState;
  }, [isControlled, valueProp, valueState]);

  return [isControlled ? valueProp : valueState, setValue] as const;
}
