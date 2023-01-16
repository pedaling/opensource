import { useState } from 'react';
import { useConfig } from '@vibrant-ui/core';
import { Body } from '../../Body';
import { Dropdown } from '../../Dropdown';
import { FilterChip } from '../../FilterChip';
import { GhostButton } from '../../GhostButton';
import { HStack } from '../../HStack';
import { Pressable } from '../../Pressable';
import { TextField } from '../../TextField';
import { VStack } from '../../VStack';
import { useTableFilterGroup } from '../context';
import type { StringFilterOperator } from '../type';
import { withTableStringFilterVariation } from './TableStringFilterProps';

export const TableStringFilter = withTableStringFilterVariation(
  ({ dataKey, label, operators, placeholder, defaultValue }) => {
    const [inputValue, setInputValue] = useState<string | undefined>(defaultValue?.value);
    const [operator, setOperator] = useState<StringFilterOperator>(defaultValue?.operator ?? operators[0]);
    const [filterOption, setFilterOption] = useState<{ value?: string; operator: StringFilterOperator }>(
      defaultValue ?? { value: inputValue, operator }
    );
    const { initialFilterDataKeys, currentFilterDataKeys, onFilterDelete } = useTableFilterGroup();

    const {
      translations: {
        tableFilter: { stringOperator: operatorTranslation, delete: deleteTranslation },
      },
    } = useConfig();

    const isInitialFilter = initialFilterDataKeys.includes(dataKey);
    const isOperatorEmptyOrNotEmpty = (op: StringFilterOperator) => op === 'empty' || op === 'notEmpty';

    if (!isInitialFilter && !currentFilterDataKeys.includes(dataKey)) {
      return null;
    }

    return (
      <Dropdown
        position="bottom-start"
        onClose={() => {
          if (isOperatorEmptyOrNotEmpty(operator)) {
            setInputValue(undefined);
          }

          setFilterOption({
            value: isOperatorEmptyOrNotEmpty(operator) ? undefined : inputValue,
            operator,
          });
        }}
        renderOpener={({ open }) => (
          <FilterChip
            size="md"
            onClick={open}
            selected={Boolean(filterOption.value) || isOperatorEmptyOrNotEmpty(filterOption.operator)}
          >
            {label}
            {isOperatorEmptyOrNotEmpty(filterOption.operator)
              ? `: ${operatorTranslation[operator]}`
              : filterOption.value
              ? `: ${filterOption.value}`
              : null}
          </FilterChip>
        )}
        renderContents={() => (
          <VStack px={20} spacing={16}>
            <HStack alignHorizontal="space-between" alignVertical="center">
              <>
                {operators.length <= 1 ? (
                  <Body level={2}>{operator && operatorTranslation[operator]}</Body>
                ) : (
                  <Dropdown
                    position="bottom-start"
                    renderOpener={({ open }) => (
                      <GhostButton size="md" onClick={open} disclosure={true}>
                        {operator && operatorTranslation[operator]}
                      </GhostButton>
                    )}
                    renderContents={({ close }) => (
                      <VStack as="ul">
                        {operators.map(operatorOption => (
                          <Pressable
                            key={operatorOption}
                            as="li"
                            py={7}
                            px={20}
                            width="100%"
                            overlayColor="onView1"
                            interactions={['hover', 'active']}
                            flexShrink={0}
                            onClick={() => {
                              setOperator(operatorOption);

                              close();
                            }}
                          >
                            <Body level={2}>{operatorOption && operatorTranslation[operatorOption]}</Body>
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
            {!isOperatorEmptyOrNotEmpty(operator) && (
              <TextField
                placeholder={placeholder}
                clearable={true}
                defaultValue={inputValue ?? filterOption.value}
                onValueChange={({ value }) => setInputValue(value)}
                onSubmit={() =>
                  setFilterOption({
                    value: inputValue ?? '',
                    operator,
                  })
                }
              />
            )}
          </VStack>
        )}
      />
    );
  }
);
