import { useConfig } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
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
  minWidth,
  maxWidth,
  lineLimit,
  testId,
}: TableFieldFilterProps<Operator>) => {
  const {
    translations: {
      tableFilterGroup: { delete: deleteTranslation },
    },
  } = useConfig();
  const { isCurrentFilter, isDeletableFilter, deleteFilter } = useTableFilterGroup();

  const selectedOperatorLabel = operatorOptions.find(({ operator }) => operator === selectedOperator)?.label;

  if (!isCurrentFilter(dataKey)) {
    return null;
  }

  return (
    <Dropdown
      position="bottom-start"
      onOpen={onOpen}
      onClose={onClose}
      renderOpener={({ open }) => (
        <FilterChip
          testId={testId}
          size="md"
          onClick={open}
          selected={active}
          maxWidth={maxWidth}
          lineLimit={lineLimit}
          endIcon={<Icon.ArrowTriangleDown.Fill />}
        >
          {label}
        </FilterChip>
      )}
      renderContents={() => (
        <VStack spacing={16} alignHorizontal="stretch" minWidth={minWidth}>
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
