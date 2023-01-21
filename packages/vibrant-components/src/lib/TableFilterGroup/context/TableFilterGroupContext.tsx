import type { FC } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactElementChildren } from '@vibrant-ui/core';
import type { Filter, Filter } from '../../TableFilter/type';

type TableFilterGroupContextValue = {
  initialFilterDataKeys: string[];
  currentFilterDataKeys: string[];
  isFilterChanged: boolean;
  onFilterDelete: (filterDataKey: string) => void;
  onFilterSave: (filter: Filter) => void;
  onFilterClear: (filterDataKey: string) => void;
  isFilterShown: (filterDataKey: string) => boolean;
};

const TableFilterGroupContext = createContext<TableFilterGroupContextValue>({
  initialFilterDataKeys: [],
  currentFilterDataKeys: [],
  isFilterChanged: false,
  onFilterDelete: () => {},
  onFilterSave: () => {},
  onFilterClear: () => {},
  isFilterShown: () => false,
});

type TableFilterGroupProviderProps = {
  initialFilterDataKeys?: string[];
  onFilterDelete: (filterDataKey: string) => void;
  onFilterSave: (filter: Filter) => void;
  onFilterClear: (filterDataKey: string) => void;
  children: ReactElementChildren;
};

export const TableFilterGroupProvider: FC<TableFilterGroupProviderProps> = ({
  children,
  initialFilterDataKeys = [],
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
      isFilterChanged,
      onFilterDelete: filterDataKey => {
        setCurrentFilterDataKeys(currentFilterDataKeys.filter(dataKey => filterDataKey !== dataKey));

        onFilterDelete(filterDataKey);
      },
      onFilterSave: filter => {
        if (currentFilterDataKeys.includes(filter.dataKey)) {
          return;
        }

        setIsFilterChanged(true);

        onFilterSave(filter);

        setCurrentFilterDataKeys([...currentFilterDataKeys, filter.dataKey]);
      },
      onFilterClear: filterDataKey => {
        onFilterClear(filterDataKey);
      },
      isFilterShown: filterDataKey =>
        initialFilterDataKeys.includes(filterDataKey) || currentFilterDataKeys.includes(filterDataKey),
    }),
    [currentFilterDataKeys, initialFilterDataKeys, isFilterChanged, onFilterClear, onFilterDelete, onFilterSave]
  );

  return <TableFilterGroupContext.Provider value={contextValue}>{children}</TableFilterGroupContext.Provider>;
};

export const TableFilterGroupConsumer = TableFilterGroupContext.Consumer;
export const useTableFilterGroup = (): TableFilterGroupContextValue => useContext(TableFilterGroupContext);

TableFilterGroupProvider.displayName = 'TableFilterGroupProvider';
