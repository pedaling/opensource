import { useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { isDefined } from '@vibrant-ui/utils';
import { Checkbox } from '../../Checkbox';
import { IconButton } from '../../IconButton';
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

    return (
      <>
        <Box
          as="tr"
          flexDirection="row"
          minWidth="100%"
          backgroundColor={header ? 'surface2' : 'background'}
          onLayout={isExpanded ? ({ width }) => setRowWidth(width) : undefined}
          borderBottomColor={borderBottomColor}
          borderBottomStyle={borderBottomStyle}
          borderBottomWidth={isExpanded ? 0 : borderBottomWidth}
        >
          {!header && selected && (
            <Box
              position="absolute"
              left={0}
              right={0}
              top={0}
              bottom={0}
              backgroundColor="onView1"
              opacity="overlay.active"
            />
          )}
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
              minWidth={0}
              flexGrow={0}
              flexShrink={0}
              flexBasis="auto"
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
              minWidth={0}
              flexGrow={0}
              flexShrink={0}
              flexBasis="auto"
            />
          )}
          {children}
        </Box>
        {isExpanded && isDefined(rowWidth) && (
          <Box
            as="tr"
            width={rowWidth}
            borderBottomColor={borderBottomColor}
            borderBottomStyle={borderBottomStyle}
            borderBottomWidth={borderBottomWidth}
          >
            <Box as="td">{renderExpanded?.()}</Box>
          </Box>
        )}
      </>
    );
  }
);
