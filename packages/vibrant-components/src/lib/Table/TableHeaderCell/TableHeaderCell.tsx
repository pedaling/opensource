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
    multiCellSelectable,
    sortDirection = 'none',
    onSort,
    onPressIn,
    onPressOut,
    onHoverIn,
    selected,
    selectedOnEdge,
    width,
  }) => {
    const handleSortButtonClick = () => {
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
        onClick={!multiCellSelectable ? handleSortButtonClick : () => {}}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onHoverIn={onHoverIn}
        cursor={sortable ? 'pointer' : 'default'}
        borderBottomColor="outline1"
        borderBottomWidth={1}
        borderBottomStyle="solid"
      >
        {selected && (
          <Box
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            right={0}
            borderWidth={1}
            borderStyle="solid"
            borderColor="outlineInformative"
            backgroundColor="informativeContainer"
            borderLeftWidth={selectedOnEdge?.left ? 1 : 0}
            borderRightWidth={selectedOnEdge?.right ? 1 : 0}
            borderTopWidth={1}
            borderBottomWidth={0}
          />
        )}
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
              <PressableBox ml={4} onClick={handleSortButtonClick}>
                <TableSortIcon sortDirection={sortDirection} />
              </PressableBox>
            )}
          </HStack>
        </VStack>
      </PressableBox>
    );
  }
);
