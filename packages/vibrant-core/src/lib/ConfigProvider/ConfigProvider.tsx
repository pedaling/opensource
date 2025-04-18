import type { ComponentType, FC, ReactNode } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ImageRequireSource } from 'react-native';
import type { ReactElementChild, ResponsiveValue } from '../../types';
import type { BorderSystemProps, MediaSystemProps, SizingSystemProps } from '../props';

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
  image?: ComponentType<
    {
      src: ImageRequireSource | string;
      alt?: string;
      ref?: any;
      sizes?: ResponsiveValue<number>;
      display?: ResponsiveValue<'flex' | 'none'>;
      draggable?: boolean;
      loading?: 'eager' | 'lazy';
      onError?: () => void;
      onLoad?: () => void;
    } & SizingSystemProps &
      MediaSystemProps &
      BorderSystemProps
  >;
  link?: ComponentType<{
    className?: string;
    href: string;
    ref?: any;
    target?: string;
    rel?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onMouseDown?: (event?: { stopPropagation: () => void }) => void;
    onMouseUp?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    children?: ReactNode;
  }>;
};

export type Translation = {
  datePicker: {
    ariaLabel: string;
  };
  calendar: {
    title: string;
    days: string[];
    months: string[];
  };
  table: {
    numberOfSelected: string;
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
  tableFilterGroup: {
    add: string;
    initialize: string;
    delete: string;
    stringFilter: {
      filterLabel: {
        empty: string;
        notEmpty: string;
      };
      operators: {
        equals: string;
        notEquals: string;
        contains: string;
        notContains: string;
        empty: string;
        notEmpty: string;
      };
    };
    dateFilter: {
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
      operators: {
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
    };
    multiSelectFilter: {
      reset: string;
      filterLabel: {
        contains: string;
        notContains: string;
      };
      operators: {
        contains: string;
        notContains: string;
      };
    };
    resourceSelectFilter: {
      filterLabel: {
        contains: {
          overOne: string;
          one: string;
        };
        notContains: string;
      };
    };
  };
  drawer: {
    drawerHeader: {
      ariaLabel: string;
    };
  };
};

export type DependencyName = keyof Dependencies;

type ConfigContextValue = {
  dependencies: Dependencies;
  translations: Translation;
};

const ConfigContext = createContext<ConfigContextValue>({
  dependencies: {},
  translations: {
    datePicker: {
      ariaLabel: '날짜 선택',
    },
    calendar: {
      title: '{year}년 {month}',
      days: ['일', '월', '화', '수', '목', '금', '토'],
      months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    },
    table: {
      numberOfSelected: '{count}개 선택됨',
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
    tableFilterGroup: {
      add: '필터 추가',
      initialize: '초기화',
      delete: '삭제',
      stringFilter: {
        filterLabel: {
          empty: '비어있음',
          notEmpty: '비어있지 않음',
        },
        operators: {
          equals: '같다',
          notEquals: '같지 않다',
          contains: '포함한다',
          notContains: '포함하지 않는다',
          empty: '비어있다',
          notEmpty: '비어있지 않다',
        },
      },
      dateFilter: {
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
        operators: {
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
      },
      multiSelectFilter: {
        reset: '전체 해제',
        filterLabel: {
          contains: '{options}',
          notContains: '{options}',
        },
        operators: {
          contains: '포함한다',
          notContains: '포함하지 않는다',
        },
      },
      resourceSelectFilter: {
        filterLabel: {
          contains: {
            overOne: '{firstOption}외 {count}개',
            one: '{firstOption}',
          },
          notContains: '[{options}] 포함하지 않음',
        },
      },
    },
    drawer: {
      drawerHeader: {
        ariaLabel: '닫기',
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
