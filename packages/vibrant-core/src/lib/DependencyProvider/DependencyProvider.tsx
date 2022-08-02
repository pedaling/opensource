import type { ComponentType, FC } from 'react';
import { createContext, useContext } from 'react';
import type { ReactElementChild } from '../types';

type Dependencies = {
  nativeLinearGradient?: ComponentType<{
    colors: any;
    locations?: any;
    start?: any;
    end?: any;
  }>;
};

export type ExternalComponentName = keyof Dependencies;

type DependencyContextValue = {
  dependencies: Dependencies;
};

const DependencyContext = createContext<DependencyContextValue>({
  dependencies: {},
});

export type DependencyProviderProps = {
  children: ReactElementChild;
  dependencies: Dependencies;
};

export const DependencyProvider: FC<DependencyProviderProps> = ({ children, dependencies }) => (
  <DependencyContext.Provider value={{ dependencies }}>{children}</DependencyContext.Provider>
);

export const useDependency = (): DependencyContextValue => useContext(DependencyContext);

DependencyProvider.displayName = 'DependencyProvider';
