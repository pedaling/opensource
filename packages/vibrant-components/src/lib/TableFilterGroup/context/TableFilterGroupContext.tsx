import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ReactElementChildren } from '@vibrant-ui/core';
import type { Filter } from '../types';

type TableFilterGroupContextValue = {
  isFilterVisible: (filterDataKey: string) => boolean;
  isDeletableFilter: (filterDataKey: string) => boolean;
  deleteFilter: (filterDataKey: string) => void;
  saveFilter: (filter: Filter) => void;
  clearFilter: (filterDataKey: string) => void;
};

const TableFilterGroupContext = createContext<TableFilterGroupContextValue>({
  isFilterVisible: () => false,
  isDeletableFilter: () => false,
  deleteFilter: () => {},
  saveFilter: () => {},
  clearFilter: () => {},
});

type TableFilterGroupProviderProps = {
  isFilterVisible: (filterDataKey: string) => boolean;
  isDeletableFilter: (filterDataKey: string) => boolean;
  deleteFilter: (filterDataKey: string) => void;
  saveFilter: (filter: Filter) => void;
  clearFilter: (filterDataKey: string) => void;
  children: ReactElementChildren;
};

export const TableFilterGroupProvider: FC<TableFilterGroupProviderProps> = ({
  children,
  isFilterVisible,
  isDeletableFilter,
  deleteFilter,
  saveFilter,
  clearFilter,
}) => {
  const contextValue = useMemo<TableFilterGroupContextValue>(
    () => ({
      isFilterVisible,
      isDeletableFilter,
      deleteFilter,
      saveFilter,
      clearFilter,
    }),
    [clearFilter, deleteFilter, isDeletableFilter, isFilterVisible, saveFilter]
  );

  return <TableFilterGroupContext.Provider value={contextValue}>{children}</TableFilterGroupContext.Provider>;
};

export const useTableFilterGroup = (): TableFilterGroupContextValue => useContext(TableFilterGroupContext);

TableFilterGroupProvider.displayName = 'TableFilterGroupProvider';
