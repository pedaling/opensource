import type { ComponentType, FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ReactElementChild, ResponsiveValue } from '@vibrant-ui/core';

export type Configurations = {
  avatar?: {
    placeholder: string;
  };
  cardNumberField?: {
    cardIconMap: Record<string, ComponentType<{ size?: ResponsiveValue<number> }>>;
  };
};

type CustomizationContextValue = Configurations;

const CustomizationContext = createContext<CustomizationContextValue>({
  avatar: {
    placeholder: 'https://cdn.class101.net/images/2483a7e5-8c20-4ac7-a209-805b4482664d',
  },
  cardNumberField: {
    cardIconMap: {},
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
