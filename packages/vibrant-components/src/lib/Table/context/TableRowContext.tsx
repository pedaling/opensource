import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { ReactElementChildren } from '@vibrant-ui/core';

type TableRowContextValue = {
  selected: boolean;
  bottomBordered: boolean;
};

const TableRowContext = createContext<TableRowContextValue>({
  selected: false,
  bottomBordered: false,
});

type TableRowProviderProps = {
  children: ReactElementChildren;
  selected: boolean;
  bottomBordered: boolean;
};

export const TableRowProvider: FC<TableRowProviderProps> = ({ children, selected, bottomBordered }) => {
  const contextValue = useMemo<TableRowContextValue>(
    () => ({
      selected,
      bottomBordered,
    }),
    [bottomBordered, selected]
  );

  return <TableRowContext.Provider value={contextValue}>{children}</TableRowContext.Provider>;
};

export const useTableRow = (): TableRowContextValue => useContext(TableRowContext);

TableRowProvider.displayName = 'TableRowProvider';
