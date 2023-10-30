import type { FC, ReactElement, RefObject } from 'react';
import { createContext, useContext } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';

type TableSearchContextValue = {
  searchFieldRef: RefObject<TextInputRef> | null;
  onSubmit?: (value: string) => void;
  onOptionChange?: (value?: string) => void;
  onTextChange?: ({ value, prevent }: { value: string; prevent: () => void }) => void;
};

const TableSearchContext = createContext<TableSearchContextValue>({
  searchFieldRef: null,
  onSubmit: () => {},
  onOptionChange: () => {},
  onTextChange: () => {},
});

type TableSearchProviderProps = {
  children: ReactElement | ReactElement[];
  searchFieldRef: RefObject<TextInputRef> | null;
  onSubmit?: (value: string) => void;
  onOptionChange?: (value?: string) => void;
  onTextChange?: ({ value, prevent }: { value: string; prevent: () => void }) => void;
};

export const TableSearchProvider: FC<TableSearchProviderProps> = ({
  children,
  searchFieldRef,
  onOptionChange,
  onTextChange,
  onSubmit,
}) => (
  <TableSearchContext.Provider value={{ searchFieldRef, onOptionChange, onSubmit, onTextChange }}>
    {children}
  </TableSearchContext.Provider>
);

export const useTableSearch = () => {
  const { searchFieldRef, onOptionChange, onSubmit, onTextChange } = useContext(TableSearchContext);

  return {
    searchFieldRef,
    onOptionChange,
    onTextChange,
    onSubmit,
  };
};
