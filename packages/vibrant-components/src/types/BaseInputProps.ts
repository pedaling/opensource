import type { ForwardedRef } from 'react';

export type BaseInputProps<Value> = {
  id?: string;
  defaultValue?: Value;
  disabled?: boolean;
  onValueChange?: (value: Value) => void;
  tabIndex?: number;
};
