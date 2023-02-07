import { useEffect, useState } from 'react';
import { useConfig } from '@vibrant-ui/core';
import { useCallbackRef } from '@vibrant-ui/utils';
import { Body } from '../../Body';
import { Dropdown } from '../../Dropdown';
import { FilterChip } from '../../FilterChip';
import { GhostButton } from '../../GhostButton';
import { HStack } from '../../HStack';
import { Pressable } from '../../Pressable';
import { VStack } from '../../VStack';
import { useTableFilterGroup } from '../context';
import type { TableFieldFilterProps } from './TableFieldFilterProps';

export const TableFieldFilter = <Operator extends string>({
  dataKey,
  label,
  active,
  selectedOperator,
  operatorOptions,
  onOperatorSelect,
  onClose,
  onOpen,
  field,
  width,
}: TableFieldFilterProps<Operator>) => {
  const {
    translations: {
      tableFilterGroup: { delete: deleteTranslation },
    },
  } = useConfig();
  const { isCurrentFilter, isDeletableFilter, deleteFilter } = useTableFilterGroup();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallbackRef(onOpen);

  const selectedOperatorLabel = operatorOptions.find(({ operator }) => operator === selectedOperator)?.label;

  useEffect(() => {
    if (isOpen) {
      handleOpen();
    }
  }, [handleOpen, isOpen]);

  if (!isCurrentFilter(dataKey)) {
    return null;
  }

  return (
    <Dropdown
      open={isOpen}
      position="bottom-start"
      onClose={() => {
        setIsOpen(false);

        onClose?.();
      }}
      renderOpener={() => (
        <FilterChip size="md" onClick={() => setIsOpen(true)} selected={active}>
          {label}
        </FilterChip>
      )}
      renderContents={() => (
        <VStack spacing={16} alignHorizontal="stretch" width={width}>
          <HStack alignHorizontal="space-between" alignVertical="center" px={20}>
            {operatorOptions.length <= 1 ? (
              <Body level={2}>{operatorOptions?.[0].label}</Body>
            ) : (
              <Dropdown
                position="bottom-start"
                renderOpener={({ open }) => (
                  <GhostButton size="md" onClick={open} disclosure={true}>
                    {selectedOperatorLabel}
                  </GhostButton>
                )}
                renderContents={({ close }) => (
                  <VStack as="ul">
                    {operatorOptions.map(({ operator, label: operatorLabel }) => (
                      <Pressable
                        key={operator}
                        as="li"
                        py={7}
                        px={20}
                        width="100%"
                        overlayColor="onView1"
                        interactions={['hover', 'active']}
                        flexShrink={0}
                        onClick={() => {
                          onOperatorSelect(operator as Operator);

                          close();
                        }}
                      >
                        <Body level={2}>{operatorLabel}</Body>
                      </Pressable>
                    ))}
                  </VStack>
                )}
              />
            )}

            {isDeletableFilter(dataKey) && (
              <GhostButton size="md" color="onView2" onClick={() => deleteFilter(dataKey)}>
                {deleteTranslation}
              </GhostButton>
            )}
          </HStack>
          {field}
        </VStack>
      )}
    />
  );
};

TableFieldFilter.displayName = 'TableFieldFilter';
