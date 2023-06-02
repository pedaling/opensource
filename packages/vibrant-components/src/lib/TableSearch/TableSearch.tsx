import { useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { HStack } from '../HStack';
import { TableSearchProvider } from './TableSearchContext';
import { TableSearchField } from './TableSearchField';
import { TableSearchOption } from './TableSearchOption';
import type { TableSearchProps } from './TableSearchProps';

export const TableSearch = ({ children, testId = 'table-search', onSubmit }: TableSearchProps) => {
  const [optionValue, setOptionValue] = useState<string>();
  const searchFieldRef = useRef<TextInputRef>(null);

  const submit = (value: string) => {
    onSubmit?.(value, optionValue);
  };

  const changeOption = (value?: string) => {
    setOptionValue(value);

    searchFieldRef.current?.focus();
  };

  return (
    <TableSearchProvider searchFieldRef={searchFieldRef} onOptionChange={changeOption} onSubmit={submit}>
      <HStack width="100%" alignVertical="center" spacing={4} data-testid={testId}>
        {children}
      </HStack>
    </TableSearchProvider>
  );
};

TableSearch.displayName = 'TableSearch';

TableSearch.Field = TableSearchField;

TableSearch.Option = TableSearchOption;
