import { useState } from 'react';
import { Icon } from '@vibrant-ui/icons';
import { Checkbox } from '../../Checkbox';
import { HStack } from '../../HStack';
import { IconButton } from '../../IconButton';
import { VStack } from '../../VStack';
import { withTableRowVariation } from './TableRowProps';

export const TableRow = withTableRowVariation(
  ({
    selectable,
    defaultSelected,
    indeterminate,
    onSelectionChange,
    expandable,
    renderExpanded,
    bottomBordered,
    TableCellComponent,
    children,
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <>
        <HStack as="tr">
          {selectable && (
            <TableCellComponent
              renderCell={() => (
                <Checkbox
                  size="sm"
                  defaultValue={defaultSelected}
                  indeterminate={indeterminate}
                  onValueChange={onSelectionChange}
                />
              )}
              bottomBordered={bottomBordered}
            />
          )}
          {expandable && (
            <TableCellComponent
              renderCell={() => (
                <IconButton
                  size="sm"
                  IconComponent={isExpanded ? Icon.ChevronDown.Regular : Icon.ChevronRight.Regular}
                  onClick={() => setIsExpanded(!isExpanded)}
                />
              )}
              bottomBordered={bottomBordered}
            />
          )}
          {children}
        </HStack>
        {isExpanded && (
          <HStack as="tr">
            <VStack as="td">{renderExpanded?.()}</VStack>
          </HStack>
        )}
      </>
    );
  }
);
