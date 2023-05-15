import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { TextField } from '../../TextField';
import { useTableSearch } from '../TableSearchContext';
import { withTableSearchFieldVariation } from './TableSearchFieldProps';

export const TableSearchField = withTableSearchFieldVariation(
  ({ maxWidth, testId = 'table-search-field', ...restProps }) => {
    const { searchFieldRef, onSubmit } = useTableSearch();

    return (
      <Box width="100%" maxWidth={maxWidth} data-testid={testId}>
        <TextField
          ref={searchFieldRef}
          type="search"
          size="md"
          clearable={true}
          renderStart={() => <Icon.Search.Thin size={20} fill="onView2" />}
          onSubmit={onSubmit}
          {...restProps}
        />
      </Box>
    );
  }
);

TableSearchField.displayName = 'TableSearchField';
