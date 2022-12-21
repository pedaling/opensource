import { useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { isDefined } from '@vibrant-ui/utils';
import { Body } from '../../Body';
import { HStack } from '../../HStack';
import type { SortDirection } from '../TableSortButton';
import { TableSortButton } from '../TableSortButton';
import { withTableHeaderCellVariation } from './TableHeaderCellProps';

const getNextSortDirection = (sortDirection: SortDirection) => {
  if (sortDirection === 'none') {
    return 'desc';
  }

  if (sortDirection === 'desc') {
    return 'asc';
  }

  if (sortDirection === 'asc') {
    return 'none';
  }

  return 'none';
};

export const TableHeaderCell = withTableHeaderCellVariation(
  ({
    title,
    description,
    textAlign,
    lineLimit,
    wordBreak,
    renderCell,
    alignHorizontal = 'center',
    alignVertical = 'center',
    sortable,
    defaultSortDirection,
    onSort,
    flexBasis = 0,
    flexGrow = 1,
    flexShrink = 1,
    minWidth = 120,
    width,
  }) => {
    const [sortDirection, setSortDirection] = useState<SortDirection>(defaultSortDirection ?? 'none');

    const handleSortButtonClick = () => {
      const nextSortDirection = getNextSortDirection(sortDirection);

      setSortDirection(nextSortDirection);

      onSort?.(nextSortDirection);
    };

    return (
      <Box
        as="th"
        py={12}
        px={16}
        alignItems={alignHorizontal}
        justifyContent={alignVertical}
        flexBasis={width ?? flexBasis}
        flexGrow={isDefined(width) ? 0 : flexGrow}
        flexShrink={isDefined(width) ? 0 : flexShrink}
        minWidth={minWidth}
        width={width}
      >
        {renderCell ? (
          renderCell()
        ) : (
          <HStack alignVertical="center" spacing={4}>
            <Body level={2} lineLimit={lineLimit} wordBreak={wordBreak} textAlign={textAlign} width="100%">
              {title}
            </Body>
            {/* TODO(Mia): replace icon with tooltip */}
            {description ? <Icon.InfoCircle.Fill size={14} /> : null}
            {sortable ? <TableSortButton sortDirection={sortDirection} onClick={handleSortButtonClick} /> : null}
          </HStack>
        )}
      </Box>
    );
  }
);
