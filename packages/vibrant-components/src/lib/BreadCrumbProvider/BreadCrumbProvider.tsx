import type { FC } from 'react';
import { createContext, useContext } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';

type BreadCrumbProviderProps = {
  children: ReactElementChild;
  current?: boolean;
};

type BreadCrumbContextValue = {
  current?: boolean;
};

const BreadCrumbContext = createContext<BreadCrumbContextValue>({
  current: undefined,
});

export const BreadCrumbProvider: FC<BreadCrumbProviderProps> = ({ current, children }) => (
  <BreadCrumbContext.Provider value={{ current }}>{children}</BreadCrumbContext.Provider>
);

export const useBreadCrumb = () => {
  const { current } = useContext(BreadCrumbContext);

  return {
    current,
  };
};
