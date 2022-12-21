import { useState } from 'react';
import { Body, Dropdown, GhostButton, HStack, Pressable, VStack } from '@vibrant-ui/components';
import { useConfig } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { isDefined } from '@vibrant-ui/utils';
import { Pagination } from '../Pagination';
import { withTableFooterVariation } from './TableFooterProps';

export const TableFooter = withTableFooterVariation(
  ({ total, pageSize, pageCount, currentPage, onPageChange, pageSizeOptions, onPageSizeChange }) => {
    const {
      translations: { tableFooter: tableFooterTranslation },
    } = useConfig();
    const defaultPageSizeOption = pageSizeOptions?.find(pageSizeOption => pageSizeOption);
    const [selectedPageSize, setSelectedPageSize] = useState(defaultPageSizeOption ?? 10);

    const selectPageSizeOption = (pageSize: number) => {
      setSelectedPageSize(pageSize);
    };

    return (
      <HStack width="100%" alignVertical="center">
        {isDefined(total) && <Body level={2}>{tableFooterTranslation.total.replace('{count}', total.toString())}</Body>}
        {pageSizeOptions && (
          <HStack spacing={12} ml="auto" alignVertical="center">
            <Body level={2}>{tableFooterTranslation.rowsPerPage}:</Body>
            <Dropdown
              position="bottom-end"
              defaultOpen={false}
              renderOpener={({ open }) => (
                <GhostButton size="md" disclosure={true} onClick={open}>
                  {selectedPageSize}
                </GhostButton>
              )}
              renderContents={({ close }) => (
                <VStack spacing={16}>
                  {pageSizeOptions.map((pageSize: number) => (
                    <Pressable
                      onClick={() => {
                        selectPageSizeOption(pageSize);

                        onPageSizeChange?.(pageSize);

                        close();
                      }}
                      key={pageSize}
                    >
                      <HStack alignHorizontal="space-between" px={16}>
                        <Body level={1} weight="medium">
                          {pageSize}
                        </Body>
                        {selectedPageSize === pageSize && <Icon.Check.Fill size={18} />}
                      </HStack>
                    </Pressable>
                  ))}
                </VStack>
              )}
            />
            <Pagination
              pageCount={pageCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </HStack>
        )}
      </HStack>
    );
  }
);
