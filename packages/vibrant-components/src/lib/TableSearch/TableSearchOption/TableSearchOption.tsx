import { useEffect } from 'react';
import { Box } from '@vibrant-ui/core';
import { SelectField } from '../../SelectField';
import { useTableSearch } from '../TableSearchContext';
import { withTableSearchOptionVariation } from './TableSearchOptionProps';

export const TableSearchOption = withTableSearchOptionVariation(
  ({ options, defaultOption, width = 120, testId = 'table-search-option' }) => {
    const { onOptionChange } = useTableSearch();

    useEffect(() => {
      onOptionChange?.(options[0]?.value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Box width={width} data-testid={testId}>
        <SelectField
          placeholder=""
          size="md"
          options={options}
          defaultValue={defaultOption ?? options[0]?.value}
          onValueChange={onOptionChange}
        />
      </Box>
    );
  }
);

TableSearchOption.displayName = 'TableSearchOption';
