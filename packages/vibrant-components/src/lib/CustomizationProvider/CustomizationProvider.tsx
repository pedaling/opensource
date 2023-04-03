import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';

export type Configurations = {
  avatar?: {
    placeholder: string;
  };
};

type CustomizationContextValue = Configurations;

const CustomizationContext = createContext<CustomizationContextValue>({
  avatar: {
    placeholder: 'https://cdn.class101.net/images/e1cba897-73d1-43de-864b-c36cefdea670/200x200.png',
  },
});

export type CustomizationProviderProps = Configurations & { children: ReactElementChild };

export const CustomizationProvider: FC<CustomizationProviderProps> = ({ children, ...props }) => {
  const config = useCustomization();

  const mergedCustomization = useMemo<CustomizationContextValue>(
    () => ({
      ...config,
      ...props,
    }),
    [config, props]
  );

  return <CustomizationContext.Provider value={mergedCustomization}>{children}</CustomizationContext.Provider>;
};

export const useCustomization = (): CustomizationContextValue => useContext(CustomizationContext);

CustomizationProvider.displayName = 'CustomizationProvider';
