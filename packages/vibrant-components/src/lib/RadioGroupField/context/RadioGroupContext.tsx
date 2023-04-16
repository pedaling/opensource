import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ReactElementChildren } from '@vibrant-ui/core';

export type RadioGroupContextValue = {
  name: string;
  value?: string;
  onValueChange: (_: { value: string | undefined }) => void;
  disabled?: boolean;
};

const RadioGroupContext = createContext<RadioGroupContextValue>({
  name: '',
  value: undefined,
  onValueChange: () => {},
});

type RadioGroupProviderProps = {
  children: ReactElementChildren;
} & RadioGroupContextValue;

export const RadioGroupProvider: FC<RadioGroupProviderProps> = ({ children, name, value, onValueChange, disabled }) => {
  const contextValue = useMemo<RadioGroupContextValue>(
    () => ({
      name,
      value,
      onValueChange,
      disabled,
    }),
    [disabled, name, onValueChange, value]
  );

  return <RadioGroupContext.Provider value={contextValue}>{children}</RadioGroupContext.Provider>;
};

export const useRadioGroup = (): RadioGroupContextValue => useContext(RadioGroupContext);

RadioGroupProvider.displayName = 'RadioGroupProvider';
