import { useConfig } from '@vibrant-ui/core';
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
  field,
  width,
}: TableFieldFilterProps<Operator>) => {
  const {
    translations: {
      tableFilter: { delete: deleteTranslation },
    },
  } = useConfig();
  const { initialFilterDataKeys, currentFilterDataKeys, onFilterDelete } = useTableFilterGroup();

  const isInitialFilter = initialFilterDataKeys.includes(dataKey);

  if (!isInitialFilter && !currentFilterDataKeys.includes(dataKey)) {
    return null;
  }

  return (
    <Dropdown
      position="bottom-start"
      onClose={onClose}
      renderOpener={({ open }) => (
        <FilterChip size="md" onClick={open} selected={active}>
          {label}
        </FilterChip>
      )}
      renderContents={() => (
        <VStack spacing={16}>
          <HStack alignHorizontal="space-between" alignVertical="center" width={width} px={20}>
            <>
              {Object.keys(operatorOptions).length <= 1 ? (
                <Body level={2}>{operatorOptions[selectedOperator]}</Body>
              ) : (
                <Dropdown
                  position="bottom-start"
                  renderOpener={({ open }) => (
                    <GhostButton size="md" onClick={open} disclosure={true}>
                      {operatorOptions[selectedOperator]}
                    </GhostButton>
                  )}
                  renderContents={({ close }) => (
                    <VStack as="ul">
                      {Object.keys(operatorOptions).map(operator => (
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
                          <Body level={2}>{operatorOptions[operator as Operator]}</Body>
                        </Pressable>
                      ))}
                    </VStack>
                  )}
                />
              )}
            </>
            {!isInitialFilter && (
              <GhostButton size="md" color="onView2" onClick={() => onFilterDelete(dataKey)}>
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
