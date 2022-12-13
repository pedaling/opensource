import { useState } from 'react';
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
    renderCell,
    alignHorizontal = 'center',
    alignVertical = 'center',
    sortable,
    defaultSortDirection,
    onSort,
    textAlign,
    ...props
  }) => {
    const [sortDirection, setSortDirection] = useState<SortDirection>(defaultSortDirection ?? 'none');

    const handleSortButtonClick = () => {
      const nextSortDirection = getNextSortDirection(sortDirection);

      setSortDirection(nextSortDirection);

      onSort?.(nextSortDirection);
    };

    return (
      <VStack
        as="th"
        py={12}
        px={16}
        alignHorizontal={alignHorizontal}
        alignVertical={alignVertical}
        minWidth={0}
        {...props}
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
      </VStack>
    );
  }
);
