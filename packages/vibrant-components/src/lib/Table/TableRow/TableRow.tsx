import { Children, useEffect, useRef, useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import type { Rect } from '@vibrant-ui/utils';
import { getElementRect } from '@vibrant-ui/utils';
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
    overlaid = false,
    renderOverlay,
    TableCellComponent,
    header,
    children,
    disabled = false,
  }) => {
    const [isExpanded, setIsExpanded] = useState(expandable && expanded);
    const [rowRect, setRowRect] = useState<Rect>();
    const rowRef = useRef<HTMLTableRowElement>(null);
    const getColumnsCount = () => {
      let columnsNum = Children.count(children);

      if (selectable) columnsNum += 1;

      if (expandable) columnsNum += 1;

      return columnsNum;
    };

    useEffect(() => {
      const updateRowRect = async () => {
        if (!overlaid || !rowRef.current) {
          return;
        }

        const rect = await getElementRect(rowRef.current);

        setRowRect(rect);
      };

      updateRowRect();
    }, [overlaid]);

    return (
      <>
        <Box
          ref={rowRef}
          as="tr"
          height="100%"
          display="web_table-row"
          backgroundColor={header ? 'surface2' : 'background'}
        >
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
        {overlaid && rowRect && (
          <Box as="tr" display="web_table-row">
            <Box
              as="td"
              colSpan={getColumnsCount()}
              position="absolute"
              top={0}
              left={52}
              right={0}
              height={rowRect.height}
              py={12}
              px={16}
              backgroundColor="surface2"
              borderBottomStyle="solid"
              borderBottomColor="outline1"
              borderBottomWidth={1}
            >
              {renderOverlay?.()}
            </Box>
          </Box>
        )}
        {isExpanded && (
          <Box as="tr" display="web_table-row">
            <Box
              as="td"
              display="web_table-cell"
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
