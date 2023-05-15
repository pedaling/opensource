import type { FC, ReactElement, RefObject } from 'react';
import { createContext, useContext } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';

type TableSearchContextValue = {
  searchFieldRef: RefObject<TextInputRef> | null;
  onSubmit?: (value: string) => void;
  onOptionChange?: (value?: string) => void;
};

const TableSearchContext = createContext<TableSearchContextValue>({
  searchFieldRef: null,
  onSubmit: () => {},
  onOptionChange: () => {},
});

type TableSearchProviderProps = {
  children: ReactElement | ReactElement[];
  searchFieldRef: RefObject<TextInputRef> | null;
  onSubmit?: (value: string) => void;
  onOptionChange?: (value?: string) => void;
};

export const TableSearchProvider: FC<TableSearchProviderProps> = ({
  children,
  searchFieldRef,
  onOptionChange,
  onSubmit,
}) => (
  <TableSearchContext.Provider value={{ searchFieldRef, onOptionChange, onSubmit }}>
    {children}
  </TableSearchContext.Provider>
);

export const useTableSearch = () => {
  const { searchFieldRef, onOptionChange, onSubmit } = useContext(TableSearchContext);

  return {
    searchFieldRef,
    onOptionChange,
    onSubmit,
  };
};
