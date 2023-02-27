import { useEffect, useRef, useState } from 'react';
import { useConfig } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { isDefined, useControllableState } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { Dropdown } from '../Dropdown';
import { GhostButton } from '../GhostButton';
import { HStack } from '../HStack';
import { Pagination } from '../Pagination';
import { Pressable } from '../Pressable';
import { VStack } from '../VStack';
import { withTableFooterVariation } from './TableFooterProps';

export const TableFooter = withTableFooterVariation(
  ({
    total,
    showTotal = true,
    pagination,
    defaultPageSize = 10,
    page,
    onPageChange,
    pageSizeOptions,
    onPageSizeChange,
  }) => {
    const {
      translations: { tableFooter: tableFooterTranslation },
    } = useConfig();
    const [selectedPageSize, setSelectedPageSize] = useState(defaultPageSize);
    const prevSelectedPageSizeRef = useRef(selectedPageSize);
    const [currentPage, setCurrentPage] = useControllableState({
      value: page,
      defaultValue: 1,
      onChange: onPageChange,
    });

    const selectPageSizeOption = (pageSize: number) => {
      setSelectedPageSize(pageSize);
    };

    useEffect(() => {
      if (prevSelectedPageSizeRef.current !== selectedPageSize) {
        setCurrentPage(1);
      }

      prevSelectedPageSizeRef.current = selectedPageSize;
    }, [prevSelectedPageSizeRef, selectedPageSize, setCurrentPage]);

    return (
      <HStack width="100%" alignVertical="center">
        {isDefined(total) && showTotal && (
          <Body level={2}>{tableFooterTranslation.total.replace('{count}', total.toString())}</Body>
        )}
        {pagination && (
          <HStack spacing={16} ml="auto" alignVertical="center">
            {pageSizeOptions && (
              <>
                <Body level={2} mr={12}>
                  {tableFooterTranslation.rowsPerPage}:
                </Body>
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
              </>
            )}
            <Pagination
              pageCount={Math.ceil(total / selectedPageSize)}
              pageSize={selectedPageSize}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </HStack>
        )}
      </HStack>
    );
  }
);
