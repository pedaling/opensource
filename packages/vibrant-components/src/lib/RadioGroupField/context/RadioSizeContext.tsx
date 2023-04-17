import type { FC } from 'react';
import { createContext, useContext } from 'react';
import type { ReactElementChildren, ResponsiveValue } from '@vibrant-ui/core';

export type RadioSizeContextValue = ResponsiveValue<'md' | 'sm'> | undefined;

const RadioSizeContext = createContext<RadioSizeContextValue>(undefined);

type RadioSizeProviderProps = {
  children: ReactElementChildren;
  size?: ResponsiveValue<'md' | 'sm'>;
};

export const RadioSizeProvider: FC<RadioSizeProviderProps> = ({ children, size }) => (
  <RadioSizeContext.Provider value={size}>{children}</RadioSizeContext.Provider>
);

export const useRadioSize = (): RadioSizeContextValue => useContext(RadioSizeContext);

RadioSizeProvider.displayName = 'RadioSizeProvider';
