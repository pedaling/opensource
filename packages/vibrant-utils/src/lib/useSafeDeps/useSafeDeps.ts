import type { RefObject } from 'react';
import { useRef } from 'react';

export const useSafeDeps = <Value>(value: Value): RefObject<Value> => {
  const refValue = useRef(value);

  refValue.current = value;

  return refValue;
};
