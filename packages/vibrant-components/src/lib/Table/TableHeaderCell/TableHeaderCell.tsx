import { useState } from 'react';
import { Box } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../../Body';
import { HStack } from '../../HStack';
import { VStack } from '../../VStack';
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
    lineLimit,
    wordBreak,
    overflowWrap,
    whiteSpace,
    renderCell,
    alignHorizontal = 'center',
    alignVertical = 'center',
    sortable,
    defaultSortDirection,
    onSort,
    width,
  }) => {
    const [sortDirection, setSortDirection] = useState<SortDirection>(defaultSortDirection ?? 'none');

    const handleSortButtonClick = () => {
      const nextSortDirection = getNextSortDirection(sortDirection);

      setSortDirection(nextSortDirection);

      onSort?.(nextSortDirection);
    };

    return (
      <Box as="th" display="table-cell" py={12} px={16} width={width}>
        <VStack alignHorizontal={alignHorizontal} alignVertical={alignVertical}>
          {renderCell ? (
            renderCell()
          ) : (
            <HStack alignVertical="center" spacing={4}>
              <Body
                level={2}
                lineLimit={lineLimit}
                wordBreak={wordBreak}
                textAlign={alignHorizontal}
                whiteSpace={whiteSpace}
                overflowWrap={overflowWrap}
              >
                {title}
              </Body>
              {/* TODO(Mia): replace icon with tooltip */}
              {description ? <Icon.InfoCircle.Fill size={14} /> : null}
              {sortable ? <TableSortButton sortDirection={sortDirection} onClick={handleSortButtonClick} /> : null}
            </HStack>
          )}
        </VStack>
      </Box>
    );
  }
);
