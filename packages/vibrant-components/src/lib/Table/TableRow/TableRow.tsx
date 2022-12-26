import { Children, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Checkbox } from '../../Checkbox';
import { IconButton } from '../../IconButton';
import { TableRowProvider } from '../context';
import { withTableRowVariation } from './TableRowProps';

export const TableRow = withTableRowVariation(
  ({
    selectable,
    selected,
    indeterminate,
    onSelectionChange,
    expandable,
    expanded = false,
    renderExpanded,
    TableCellComponent,
    header,
    children,
    disabled = false,
  }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);
    const getColumnsCount = () => {
      let columnsNum = Children.count(children);

      if (selectable) columnsNum += 1;

      if (expandable) columnsNum += 1;

      return columnsNum;
    };

    return (
      <>
        <Box as="tr" height="100%" display="table-row" backgroundColor={header ? 'surface2' : 'background'}>
          <TableRowProvider selected={selected ?? false} bottomBordered={!isExpanded}>
            {selectable && (
              <TableCellComponent
                renderCell={() => (
                  <Checkbox
                    size="sm"
                    defaultValue={selected}
                    indeterminate={indeterminate}
                    onValueChange={onSelectionChange}
                    disabled={disabled}
                  />
                )}
                width={52}
              />
            )}
            {expandable && (
              <TableCellComponent
                renderCell={() => (
                  <IconButton
                    size="sm"
                    IconComponent={isExpanded ? Icon.ChevronDown.Regular : Icon.ChevronRight.Regular}
                    onClick={() => setIsExpanded(!isExpanded)}
                    disabled={disabled}
                  />
                )}
                width={48}
              />
            )}
            {children}
          </TableRowProvider>
        </Box>
        {isExpanded && (
          <Box as="tr" display="table-row">
            <Box
              as="td"
              display="table-cell"
              colSpan={getColumnsCount()}
              borderBottomStyle="solid"
              borderBottomColor="outline1"
              borderBottomWidth={1}
            >
              {renderExpanded?.()}
            </Box>
          </Box>
        )}
      </>
    );
  }
);
