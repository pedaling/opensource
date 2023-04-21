import { useCallback, useEffect, useRef, useState } from 'react';
import { isDefined } from '../isDefined';
import { useCallbackRef } from '../useCallbackRef';

export type UseControllableStateProps<Value> = {
  value?: Value;
  defaultValue?: Value;
  onValueChange?: (value: Value) => void;
};

export function useControllableState<Value>({
  value: valueProp,
  defaultValue,
  onValueChange,
}: UseControllableStateProps<Value>) {
  const [valueState, setValueState] = useState<Value>(defaultValue as Value);
  const isControlled = isDefined(valueProp);
  const handleValueChange = useCallbackRef(onValueChange);
  const valueRef = useRef(isControlled ? valueProp : valueState);

  const setValue = useCallback(
    (nextValue: Value) => {
      if (valueRef.current === nextValue) {
        return;
      }

      handleValueChange(nextValue);

      if (!isControlled) {
        setValueState(nextValue);
      }
    },
    [handleValueChange, isControlled]
  );

  useEffect(() => {
    valueRef.current = isControlled ? valueProp : valueState;
  }, [isControlled, valueProp, valueState]);

  return [isControlled ? valueProp : valueState, setValue] as const;
}
