import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ReactElementChildren } from '@vibrant-ui/core';

export type RadioGroupContextValue = {
  name: string;
  value?: string;
  onValueChange: (value: string) => void;
  disabled: boolean;
  state: 'default' | 'error';
};

const RadioGroupContext = createContext<RadioGroupContextValue>({
  name: '',
  value: undefined,
  onValueChange: () => {},
  disabled: false,
  state: 'default',
});

type RadioGroupProviderProps = {
  children: ReactElementChildren;
} & RadioGroupContextValue;

export const RadioGroupProvider: FC<RadioGroupProviderProps> = ({
  children,
  name,
  value,
  onValueChange,
  disabled,
  state,
}) => {
  const contextValue = useMemo<RadioGroupContextValue>(
    () => ({
      name,
      value,
      onValueChange,
      disabled,
      state,
    }),
    [disabled, name, onValueChange, state, value]
  );

  return <RadioGroupContext.Provider value={contextValue}>{children}</RadioGroupContext.Provider>;
};

export const useRadioGroup = (): RadioGroupContextValue => useContext(RadioGroupContext);

RadioGroupProvider.displayName = 'RadioGroupProvider';
