import { Box, PressableBox } from '@vibrant-ui/core';
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
    selectable,
    sortDirection = 'none',
    onSort,
    onPressIn,
    onPressOut,
    onHoverIn,
    width,
  }) => {
    const handleSortButtonClick = () => {
      // 선택 가능한 경우 선택 액션이 우선한다. 정렬은 정렬 버튼으로
      if (selectable) {
        return;
      }

      const nextSortDirection = getNextSortDirection(sortDirection);

      onSort?.(nextSortDirection);
    };

    return (
      <PressableBox
        as="th"
        display="web_table-cell"
        height="100%"
        py={12}
        px={16}
        width={width}
        disabled={!sortable}
        onClick={handleSortButtonClick}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onHoverIn={onHoverIn}
        cursor={sortable ? 'pointer' : 'default'}
        borderBottomColor="outline1"
        borderBottomWidth={1}
        borderBottomStyle="solid"
      >
        <VStack height="100%" alignVertical={alignVertical}>
          <HStack width="100%" alignVertical="center" alignHorizontal={alignHorizontal}>
            {renderCell ? (
              renderCell()
            ) : (
              <>
                <Body
                  level={2}
                  weight="medium"
                  minWidth={0}
                  lineLimit={lineLimit}
                  wordBreak={wordBreak}
                  textAlign={alignHorizontal}
                  whiteSpace={whiteSpace}
                  overflowWrap={overflowWrap}
                >
                  {title}
                </Body>
                {description && (
                  <Box ml={4}>
                    <Tooltip content={description}>
                      <Icon.InfoCircle.Fill size={14} />
                    </Tooltip>
                  </Box>
                )}
              </>
            )}
            {sortable && (
              <Box ml={4}>
                <TableSortIcon sortDirection={sortDirection} />
              </Box>
            )}
          </HStack>
        </VStack>
      </PressableBox>
    );
  }
);
