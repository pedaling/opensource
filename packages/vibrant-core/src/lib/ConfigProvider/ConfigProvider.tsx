import type { ComponentType, FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import * as ReactSpring from 'react-spring';
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
  tableFooter: {
    rowsPerPage: string;
    total: string;
  };
  pagination: {
    ariaLabel: string;
    prev: string;
    next: string;
  };
  tableFilter: {
    delete: string;
    stringOperator: {
      equals: string;
      notEquals: string;
      contains: string;
      notContains: string;
      empty: string;
      notEmpty: string;
    };
  };
};

export type DependencyName = keyof Dependencies;

type ConfigContextValue = {
  dependencies: Dependencies;
  translations: Translation;
};

const ConfigContext = createContext<ConfigContextValue>({
  dependencies: {
    reactSpringModule: ReactSpring,
  },
  translations: {
    calendar: {
      title: '{year}년 {month}',
      days: ['일', '월', '화', '수', '목', '금', '토'],
      months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    },
    tableFooter: {
      rowsPerPage: '페이지당 행 수',
      total: '총 {count}개',
    },
    pagination: {
      ariaLabel: '페이지네이션',
      prev: '이전',
      next: '다음',
    },
    tableFilter: {
      delete: '삭제',
      stringOperator: {
        equals: '같다',
        notEquals: '같지 않다',
        contains: '포함한다',
        notContains: '포함하지 않는다',
        empty: '비어있다',
        notEmpty: '비어있지 않다',
      },
    },
  },
});

export type ConfigProviderProps = {
  children: ReactElementChild;
  dependencies?: Dependencies;
  translations?: Partial<Translation>;
};

export const ConfigProvider: FC<ConfigProviderProps> = ({ children, dependencies, translations }) => {
  const config = useConfig();

  const mergedConfig = useMemo<ConfigContextValue>(
    () => ({
      ...config,
      translations: {
        ...config.translations,
        ...translations,
      },
      dependencies: {
        ...config.dependencies,
        ...dependencies,
      },
    }),
    [config, dependencies, translations]
  );

  return <ConfigContext.Provider value={mergedConfig}>{children}</ConfigContext.Provider>;
};

export const useConfig = (): ConfigContextValue => useContext(ConfigContext);

ConfigProvider.displayName = 'ConfigProvider';
