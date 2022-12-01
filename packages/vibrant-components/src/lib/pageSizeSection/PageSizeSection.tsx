import { useState } from 'react';
import { Body, Dropdown, GhostButton, HStack, Pressable, VStack } from '@vibrant-ui/components';
import { Text, useConfig } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { withPageSizeSectionVariation } from './PageSizeSectionProps';

export const PageSizeSection = withPageSizeSectionVariation(({ pageSizeOptions, onClickPageSize }) => {
  const {
    translations: { pageSizeSection: pageSizeSectionTranslation },
  } = useConfig();
  const defaultPageSizeOption = pageSizeOptions.find(pageSizeOption => pageSizeOption);
  const [selectedPageSize, setSelectedPageSize] = useState(defaultPageSizeOption || 10);

  const selectPageSizeOption = (pageSize: number) => {
    setSelectedPageSize(pageSize);
  };

  return (
    <HStack spacing={12}>
      <Text typography="body2" fontWeight="medium" color="onView1">
        {pageSizeSectionTranslation.title}:
      </Text>

      <Dropdown
        position="bottom-end"
        renderOpener={({ open }) => (
          <GhostButton size="md" color="onView1" disclosure={true} onClick={open}>
            {selectedPageSize}
          </GhostButton>
        )}
        renderContents={({ close }) => (
          <VStack spacing={16}>
            {pageSizeOptions.map((pageSize: number) => (
              <Pressable
                onClick={() => {
                  selectPageSizeOption(pageSize);

                  onClickPageSize(pageSize);

                  close();
                }}
                key={pageSize}
              >
                <HStack alignHorizontal="space-between" px={16}>
                  <Body level={1} color="onView1" weight="medium">
                    {pageSize}
                  </Body>
                  {selectedPageSize === pageSize && <Icon.Check.Fill size={18} />}
                </HStack>
              </Pressable>
            ))}
          </VStack>
        )}
        open={false}
      />
    </HStack>
  );
});
