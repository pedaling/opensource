import { Text } from '@vibrant-ui/core';
import { Pressable } from '../Pressable';
import { withPaginationMiscCellVariation } from './PaginationMiscCellProps';

export const PaginationMiscCell = withPaginationMiscCellVariation(
  ({ innerRef, page, onClick, overlayColor, ...props }) => (
    <Pressable
      as="button"
      ref={innerRef}
      width={38}
      height={38}
      borderRadius={19}
      alignItems="center"
      justifyContent="center"
      onClick={() => onClick?.(page)}
      overlayColor={overlayColor}
      interactions={['hover', 'focus', 'active']}
      flexShrink={0}
      {...props}
    >
      <Text as="span" fontWeight="bold">
        {page}
      </Text>
    </Pressable>
  )
);
