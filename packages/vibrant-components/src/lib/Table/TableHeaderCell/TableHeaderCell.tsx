import { Icon } from '@vibrant-ui/icons';
import { Body } from '../../Body';
import { HStack } from '../../HStack';
import { Pressable } from '../../Pressable';
import { VStack } from '../../VStack';
import { withTableHeaderCellVariation } from './TableHeaderCellProps';

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
    onSortClick,
    SortIconComponent,
    sortIconFill,
    ...props
  }) => (
    <VStack as="th" py={12} px={16} alignHorizontal={alignHorizontal} alignVertical={alignVertical} {...props}>
      {renderCell ? (
        renderCell()
      ) : (
        <HStack alignVertical="center" spacing={4}>
          <Body level={2} lineLimit={lineLimit} wordBreak={wordBreak}>
            {title}
          </Body>
          {/* TODO(Mia): replace icon with tooltip */}
          {description ? <Icon.InfoCircle.Fill size={14} /> : null}
          {sortable ? (
            <Pressable onClick={onSortClick}>
              <SortIconComponent size={14} fill={sortIconFill} />
            </Pressable>
          ) : null}
        </HStack>
      )}
    </VStack>
  )
);
