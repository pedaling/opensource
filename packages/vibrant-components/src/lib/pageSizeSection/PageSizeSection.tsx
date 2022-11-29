import { useState } from 'react';
import { Body, Dropdown, GhostButton, HStack, Pressable, VStack } from '@vibrant-ui/components';
import { Text } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import type { PageSizeOption } from './PageSizeSectionProps';
import { withPageSizeSectionVariation } from './PageSizeSectionProps';

const DEFAULT_PAGE_SIZE_OPTION = { label: '', value: 0, onClick: () => {}, initial: true };

export const PageSizeSection = withPageSizeSectionVariation(({ pageSizeOptions, total }) => {
  const [defaultPageSizeOption] = pageSizeOptions.filter(pageSizeOption => pageSizeOption.initial);
  const [selectedOption, setSelectedOption] = useState(defaultPageSizeOption || DEFAULT_PAGE_SIZE_OPTION);

  const selectPageSizeOption = (pageSizeOption: PageSizeOption) => {
    setSelectedOption(pageSizeOption);
  };

  return (
    <HStack alignHorizontal="space-between">
      <HStack>
        <Body level={4}>총 {total}</Body>
      </HStack>
      <HStack spacing={12}>
        <Text typography="body2" fontWeight="medium" color="onView1">
          페이지 당 행 수 :
        </Text>

        <Dropdown
          position="bottom-end"
          renderOpener={({ open }) => (
            <GhostButton size="md" color="onView1" disclosure={true} onClick={open}>
              {selectedOption.value}
            </GhostButton>
          )}
          renderContents={({ close }) => (
            <VStack spacing={16}>
              {pageSizeOptions.map(({ label, value, onClick, initial }, index) => (
                <Pressable
                  onClick={() => {
                    onClick(value);

                    selectPageSizeOption({ label, value, onClick, initial });

                    close();
                  }}
                  key={`${value}_${index}`}
                >
                  <HStack alignHorizontal="space-between" px={16}>
                    <Body level={1} color="onView1" weight="medium">
                      {label}
                    </Body>
                    {selectedOption.value === value && <Icon.Check.Fill size={18} />}
                  </HStack>
                </Pressable>
              ))}
            </VStack>
          )}
          open={false}
        />
      </HStack>
    </HStack>
  );
});
