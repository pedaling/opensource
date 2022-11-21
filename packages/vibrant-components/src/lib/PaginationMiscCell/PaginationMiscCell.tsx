import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { Text } from '@vibrant-ui/core';
import { Pressable } from '../Pressable';
import { withPaginationMiscCellVariation } from './PaginationMiscCellProps';

export const PaginationMiscCell = withPaginationMiscCellVariation(
  forwardRef(({ page, onClick, overlayColor, ...props }, ref: ForwardedRef<HTMLButtonElement>) => (
    <Pressable
      as="button"
      ref={ref}
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
  ))
);
