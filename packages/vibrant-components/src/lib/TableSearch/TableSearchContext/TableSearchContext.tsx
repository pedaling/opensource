import type { FC, ReactElement } from 'react';
import { createContext, useContext } from 'react';

type TableSearchContextValue = {
  isFocus: boolean;
  initIsFocus: () => void;
  onSubmit?: (value: string) => void;
  onOptionChange?: (value?: string) => void;
};

const TableSearchContext = createContext<TableSearchContextValue>({
  isFocus: false,
  initIsFocus: () => {},
  onSubmit: () => {},
  onOptionChange: () => {},
});

type TableSearchProviderProps = {
  children: ReactElement | ReactElement[];
  isFocus: boolean;
  initIsFocus: () => void;
  onSubmit?: (value: string) => void;
  onOptionChange?: (value?: string) => void;
};

export const TableSearchProvider: FC<TableSearchProviderProps> = ({
  children,
  initIsFocus,
  isFocus,
  onOptionChange,
  onSubmit,
}) => (
  <TableSearchContext.Provider value={{ initIsFocus, isFocus, onOptionChange, onSubmit }}>
    {children}
  </TableSearchContext.Provider>
);

export const useTableSearch = () => {
  const { initIsFocus, isFocus, onOptionChange, onSubmit } = useContext(TableSearchContext);

  return {
    initIsFocus,
    isFocus,
    onOptionChange,
    onSubmit,
  };
};
