import type { ComponentType, FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ReactElementChild } from '../../types';

export type Dependencies = {
  nativeLinearGradient?: ComponentType<{
    colors: any;
    locations?: any;
    start?: any;
    end?: any;
  }>;
  nativeShadows?: ComponentType<{
    shadows: {
      startColor?: any;
      distance?: any;
      offset?: any;
    }[];
  }>;
  reactSpringModule?: any;
};

export type Translation = {
  calendar: {
    title: string;
    days: string[];
    months: string[];
  };
};

export type DependencyName = keyof Dependencies;

type ConfigContextValue = {
  dependencies: Dependencies;
  translation: Translation;
};

const ConfigContext = createContext<ConfigContextValue>({
  dependencies: {},
  translation: {
    calendar: {
      title: '{year}년 {month}',
      days: ['일', '월', '화', '수', '목', '금', '토'],
      months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    },
  },
});

export type DependencyProviderProps = {
  children: ReactElementChild;
  dependencies?: Dependencies;
  translation?: Partial<Translation>;
};

export const ConfigProvider: FC<DependencyProviderProps> = ({ children, dependencies, translation }) => {
  const config = useConfig();

  const mergedConfig = useMemo<ConfigContextValue>(
    () => ({
      ...config,
      translation: {
        ...config.translation,
        ...translation,
      },
      dependencies: {
        ...config.dependencies,
        ...dependencies,
      },
    }),
    [config, dependencies, translation]
  );

  return <ConfigContext.Provider value={mergedConfig}>{children}</ConfigContext.Provider>;
};

export const useConfig = (): ConfigContextValue => useContext(ConfigContext);

ConfigProvider.displayName = 'ConfigProvider';
