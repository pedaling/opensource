import { useState } from 'react';
import { PressableBox } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../../Body';
import { HStack } from '../../HStack';
import { Tooltip } from '../../Tooltip';
import { VStack } from '../../VStack';
import type { SortDirection } from '../TableSortIcon';
import { TableSortIcon } from '../TableSortIcon';
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
      <PressableBox
        as="th"
        display="web_table-cell"
        py={12}
        px={16}
        width={width}
        disabled={!sortable}
        onClick={handleSortButtonClick}
        cursor={sortable ? 'pointer' : 'default'}
        borderBottomColor="outline1"
        borderBottomWidth={1}
        borderBottomStyle="solid"
      >
        <VStack alignHorizontal={alignHorizontal} alignVertical={alignVertical}>
          <HStack alignVertical="center" spacing={4}>
            {renderCell ? (
              renderCell()
            ) : (
              <>
                <Body
                  level={2}
                  weight="bold"
                  lineLimit={lineLimit}
                  wordBreak={wordBreak}
                  textAlign={alignHorizontal}
                  whiteSpace={whiteSpace}
                  overflowWrap={overflowWrap}
                >
                  {title}
                </Body>
                {description && (
                  <Tooltip content={description}>
                    <Icon.InfoCircle.Fill size={14} />
                  </Tooltip>
                )}
              </>
            )}
            {sortable && <TableSortIcon sortDirection={sortDirection} />}
          </HStack>
        </VStack>
      </PressableBox>
    );
  }
);
