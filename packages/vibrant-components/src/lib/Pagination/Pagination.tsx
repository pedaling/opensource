import { Box, useConfig } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { HStack } from '../HStack';
import { PaginationButton } from '../PaginationButton';
import { PaginationMiscCell } from '../PaginationMiscCell';
import { Space } from '../Space';
import { withPaginationVariation } from './PaginationProps';

export const Pagination = withPaginationVariation(
  ({ pageCount, pageSize = 5, currentPage, onPageChange, spacing, extra = false, testId = 'pagination' }) => {
    const {
      translations: { pagination: paginationTranslation },
    } = useConfig();

    const pages = Array(pageSize)
      .fill(null)
      .map((_, index) => Math.floor((currentPage - 1) / pageSize) * pageSize + index + 1)
      .filter(page => page <= pageCount);

    const moveToPrevPage = () => onPageChange(pages[0] - pageSize);
    const moveToNextPage = () => onPageChange(pages[0] + pageSize);

    const hasPrevPage = pages[0] > 1;
    const hasNextPage = pages[pages.length - 1] < pageCount;

    return (
      <HStack as="nav" ariaLabel={paginationTranslation.ariaLabel} alignVertical="center" data-testid={testId}>
        <PaginationButton
          type="prev"
          onClick={moveToPrevPage}
          disabled={!hasPrevPage}
          ariaLabel={paginationTranslation.prev}
        />
        <Space width={spacing} />
        {extra && hasPrevPage && (
          <>
            <PaginationMiscCell page={1} onClick={value => onPageChange(value)} selected={currentPage === 1} />
            <Box mx={14}>
              <Icon.MoreHorizontal.Fill size={16} fill="onView3" />
            </Box>
          </>
        )}
        <HStack spacing={2}>
          {pages.map(page => (
            <PaginationMiscCell
              key={page}
              page={page}
              onClick={value => onPageChange(value)}
              selected={page === currentPage}
            />
          ))}
        </HStack>
        {extra && hasNextPage && (
          <>
            <Box mx={14}>
              <Icon.MoreHorizontal.Fill size={16} fill="onView3" />
            </Box>
            <PaginationMiscCell
              page={pageCount}
              onClick={value => onPageChange(value)}
              selected={currentPage === pageCount}
            />
          </>
        )}
        <Space width={spacing} />
        <PaginationButton
          type="next"
          onClick={moveToNextPage}
          disabled={!hasNextPage}
          ariaLabel={paginationTranslation.next}
        />
      </HStack>
    );
  }
);
