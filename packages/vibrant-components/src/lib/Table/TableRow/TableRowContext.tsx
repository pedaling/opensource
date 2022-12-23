import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ReactElementChildren } from '@vibrant-ui/core';

type TableRowContextValue = {
  selected: boolean;
};

const TableRowContext = createContext<TableRowContextValue>({
  selected: false,
});

type TableRowProviderProps = {
  children: ReactElementChildren;
  selected: boolean;
};

export const TableRowProvider: FC<TableRowProviderProps> = ({ children, selected }) => {
  const contextValue = useMemo<TableRowContextValue>(
    () => ({
      selected,
    }),
    [selected]
  );

  return <TableRowContext.Provider value={contextValue}>{children}</TableRowContext.Provider>;
};

export const useTableRow = (): TableRowContextValue => useContext(TableRowContext);

TableRowProvider.displayName = 'TableRowProvider';
