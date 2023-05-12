import { useState } from 'react';
import { HStack } from '../HStack';
import { TableSearchProvider } from './TableSearchContext';
import { TableSearchField } from './TableSearchField';
import { TableSearchOption } from './TableSearchOption';
import type { TableSearchProps } from './TableSearchProps';

export const TableSearch = ({ children, testId = 'table-search', onSubmit }: TableSearchProps) => {
  const [optionValue, setOptionValue] = useState<string>();
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const submit = (value: string) => {
    onSubmit?.(value, optionValue);
  };

  const changeOption = (value?: string) => {
    setOptionValue(value);

    setIsFocus(true);
  };

  return (
    <TableSearchProvider
      initIsFocus={() => setIsFocus(false)}
      isFocus={isFocus}
      onOptionChange={changeOption}
      onSubmit={submit}
    >
      <HStack width="100%" alignVertical="center" spacing={4} data-testid={testId}>
        {children}
      </HStack>
    </TableSearchProvider>
  );
};

TableSearch.displayName = 'TableSearch';

TableSearch.Field = TableSearchField;

TableSearch.Option = TableSearchOption;
