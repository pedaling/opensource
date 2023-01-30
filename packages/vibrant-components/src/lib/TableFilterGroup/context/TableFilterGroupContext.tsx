import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ReactElementChildren } from '@vibrant-ui/core';
import type { Filter } from '../types';

type TableFilterGroupContextValue = {
  updateFilter: (filter: Filter) => void;
  deleteFilter: (filterDataKey: string) => void;
  isCurrentFilter: (filterDataKey: string) => boolean;
  isDeletableFilter: (filterDataKey: string) => boolean;
};

const TableFilterGroupContext = createContext<TableFilterGroupContextValue>({
  updateFilter: () => {},
  deleteFilter: () => {},
  isCurrentFilter: () => false,
  isDeletableFilter: () => false,
});

type TableFilterGroupProviderProps = {
  updateFilter: (filter: Filter) => void;
  deleteFilter: (filterDataKey: string) => void;
  isCurrentFilter: (filterDataKey: string) => boolean;
  isDeletableFilter: (filterDataKey: string) => boolean;
  children: ReactElementChildren;
};

export const TableFilterGroupProvider: FC<TableFilterGroupProviderProps> = ({
  children,
  updateFilter,
  deleteFilter,
  isCurrentFilter,
  isDeletableFilter,
}) => {
  const contextValue = useMemo<TableFilterGroupContextValue>(
    () => ({
      updateFilter,
      deleteFilter,
      isCurrentFilter,
      isDeletableFilter,
    }),
    [deleteFilter, isCurrentFilter, isDeletableFilter, updateFilter]
  );

  return <TableFilterGroupContext.Provider value={contextValue}>{children}</TableFilterGroupContext.Provider>;
};

export const TableFilterGroupConsumer = TableFilterGroupContext.Consumer;
export const useTableFilterGroup = (): TableFilterGroupContextValue => useContext(TableFilterGroupContext);

TableFilterGroupProvider.displayName = 'TableFilterGroupProvider';
