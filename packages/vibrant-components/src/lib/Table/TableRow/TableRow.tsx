import { Children, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { isDefined } from '@vibrant-ui/utils';
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
    borderBottomColor,
    borderBottomStyle,
    borderBottomWidth,
  }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);
    const [rowWidth, setRowWidth] = useState<number>();
    const getColumnsCount = () => {
      let columnsNum = Children.count(children);

      if (selectable) columnsNum += 1;

      if (expandable) columnsNum += 1;

      return columnsNum;
    };

    return (
      <TableRowProvider selected={selected ?? false}>
        <Box
          as="tr"
          height="100%"
          display="table-row"
          backgroundColor={header ? 'surface2' : 'background'}
          onLayout={isExpanded ? ({ width }) => setRowWidth(width) : undefined}
          borderBottomColor={borderBottomColor}
          borderBottomStyle={borderBottomStyle}
          borderBottomWidth={isExpanded ? 0 : borderBottomWidth}
        >
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
        </Box>
        {isExpanded && isDefined(rowWidth) && (
          <Box
            as="tr"
            display="table-row"
            borderBottomColor={borderBottomColor}
            borderBottomStyle={borderBottomStyle}
            borderBottomWidth={borderBottomWidth}
          >
            <Box as="td" display="table-cell" colspan={getColumnsCount()}>
              {renderExpanded?.()}
            </Box>
          </Box>
        )}
      </TableRowProvider>
    );
  }
);
