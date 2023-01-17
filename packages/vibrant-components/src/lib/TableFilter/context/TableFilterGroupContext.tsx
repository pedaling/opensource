import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ReactElementChildren } from '@vibrant-ui/core';
import type { Filter } from '../type';

type TableFilterGroupContextValue = {
  initialFilterDataKeys: string[];
  currentFilterDataKeys: string[];
  onFilterDelete: (filterDataKey: string) => void;
  onFilterSave: (filter: Filter) => void;
};

const TableFilterGroupContext = createContext<TableFilterGroupContextValue>({
  initialFilterDataKeys: [],
  currentFilterDataKeys: [],
  onFilterDelete: () => {},
  onFilterSave: () => {},
});

type TableFilterGroupProviderProps = {
  initialFilterDataKeys?: string[];
  currentFilterDataKeys: string[];
  onFilterDelete: (filterDataKey: string) => void;
  onFilterSave: (filter: Filter) => void;
  children: ReactElementChildren;
};

export const TableFilterGroupProvider: FC<TableFilterGroupProviderProps> = ({
  children,
  initialFilterDataKeys = [],
  currentFilterDataKeys,
  onFilterDelete,
  onFilterSave,
}) => {
  const contextValue = useMemo<TableFilterGroupContextValue>(
    () => ({
      initialFilterDataKeys,
      currentFilterDataKeys,
      onFilterDelete,
      onFilterSave,
    }),
    [currentFilterDataKeys, initialFilterDataKeys, onFilterDelete, onFilterSave]
  );

  return <TableFilterGroupContext.Provider value={contextValue}>{children}</TableFilterGroupContext.Provider>;
};

export const useTableFilterGroup = (): TableFilterGroupContextValue => useContext(TableFilterGroupContext);

TableFilterGroupProvider.displayName = 'TableFilterGroupProvider';
