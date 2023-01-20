import type { FC } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactElementChildren } from '@vibrant-ui/core';
import type { Filter, Filter } from '../../TableFilter/type';

type TableFilterGroupContextValue = {
  initialFilterDataKeys: string[];
  currentFilterDataKeys: string[];
  onFilterDelete: (filterDataKey: string) => void;
  onFilterSave: (filter: Filter) => void;
  onFilterClear: (filterDataKey: string) => void;
};

const TableFilterGroupContext = createContext<TableFilterGroupContextValue>({
  initialFilterDataKeys: [],
  currentFilterDataKeys: [],
  onFilterDelete: () => {},
  onFilterSave: () => {},
  onFilterClear: () => {},
});

type TableFilterGroupProviderProps = {
  initialFilterDataKeys?: string[];
  currentFilterDataKeys: string[];
  onFilterDelete: (filterDataKey: string) => void;
  onFilterSave: (filter: Filter) => void;
  onFilterClear: (filterDataKey: string) => void;
  children: ReactElementChildren;
};

export const TableFilterGroupProvider: FC<TableFilterGroupProviderProps> = ({
  children,
  initialFilterDataKeys = [],
  currentFilterDataKeys,
  onFilterDelete,
  onFilterSave,
  onFilterClear,
}) => {
  const [currentFilterDataKeys, setCurrentFilterDataKeys] = useState<string[]>(initialFilterDataKeys);

  const [isFilterChanged, setIsFilterChanged] = useState(false);

  const contextValue = useMemo<TableFilterGroupContextValue>(
    () => ({
      initialFilterDataKeys,
      currentFilterDataKeys,
      onFilterDelete,
      onFilterSave,
      onFilterClear,
    }),
    [currentFilterDataKeys, initialFilterDataKeys, onFilterClear, onFilterDelete, onFilterSave]
  );

  return <TableFilterGroupContext.Provider value={contextValue}>{children}</TableFilterGroupContext.Provider>;
};

export const TableFilterGroupConsumer = TableFilterGroupContext.Consumer;
export const useTableFilterGroup = (): TableFilterGroupContextValue => useContext(TableFilterGroupContext);

TableFilterGroupProvider.displayName = 'TableFilterGroupProvider';
