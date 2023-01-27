import type { ComponentType, FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import * as ReactSpring from 'react-spring';
import type { ReactElementChild, ResponsiveValue } from '../../types';
import type { MediaSystemProps } from '../props';

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
  image?: ComponentType<{
    src?: string;
    ref?: any;
    alt?: string;
    loading?: 'eager' | 'lazy';
    display?: ResponsiveValue<'flex' | 'none'>;
  }> &
    MediaSystemProps;
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
    reset: string;
    stringOperator: {
      filterLabel: {
        empty: string;
        notEmpty: string;
      };
      equals: string;
      notEquals: string;
      contains: string;
      notContains: string;
      empty: string;
      notEmpty: string;
    };
    dateOperator: {
      filterLabel: {
        equals: string;
        notEquals: string;
        before: string;
        after: string;
        onOrBefore: string;
        onOrAfter: string;
        empty: string;
        notEmpty: string;
        between: string;
      };
      equals: string;
      notEquals: string;
      before: string;
      after: string;
      onOrBefore: string;
      onOrAfter: string;
      between: string;
      empty: string;
      notEmpty: string;
    };
    multiSelectOperator: {
      filterLabel: {
        equals: string;
        notEquals: string;
        empty: string;
        notEmpty: string;
      };
      equals: string;
      notEquals: string;
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
      reset: '초기화',
      stringOperator: {
        filterLabel: {
          empty: '비어있음',
          notEmpty: '비어있지 않음',
        },
        equals: '같다',
        notEquals: '같지 않다',
        contains: '포함한다',
        notContains: '포함하지 않는다',
        empty: '비어있다',
        notEmpty: '비어있지 않다',
      },
      dateOperator: {
        filterLabel: {
          equals: '{date}',
          notEquals: '{date} 같지 않음',
          before: '{date} 이전',
          after: '{date} 이후',
          onOrBefore: '{date} 당일 혹은 이전',
          onOrAfter: '{date} 당일 혹은 이후',
          empty: '비어있음',
          notEmpty: '비어있지 않음',
          between: '{startDate} - {endDate}',
        },
        equals: '같다',
        notEquals: '같지 않다',
        before: '이전',
        after: '이후',
        onOrBefore: '당일 혹은 이전',
        onOrAfter: '당일 혹은 이후',
        empty: '비어있다',
        notEmpty: '비어있지 않다',
        between: '범위 내',
      },
      multiSelectOperator: {
        filterLabel: {
          equals: '{options}',
          notEquals: '{options} 같지 않음',
          empty: '비어있음',
          notEmpty: '비어있지 않음',
        },
        equals: '같다',
        notEquals: '같지 않다',
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
