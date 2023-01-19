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
  ({
    dataKey,
    label,
    operators = ['equals', 'notEquals', 'contains', 'notContains', 'empty', 'notEmpty'],
    placeholder,
    defaultValue,
  }) => {
    const [inputValue, setInputValue] = useState<string>(defaultValue?.value ?? '');
    const [operator, setOperator] = useState<StringFilterOperator>(defaultValue?.operator ?? operators[0]);
    const [value, setValue] = useState<string>(inputValue);
    const { initialFilterDataKeys, currentFilterDataKeys, onFilterDelete, onFilterSave, onFilterClear } =
      useTableFilterGroup();

    const {
      translations: {
        tableFilter: { stringOperator: operatorTranslation, delete: deleteTranslation },
      },
    } = useConfig();

    const isInitialFilter = initialFilterDataKeys.includes(dataKey);
    const isOperatorEmptyOrNotEmpty = (op: StringFilterOperator) => op === 'empty' || op === 'notEmpty';
    const isValidFilter = (filter: { value: string; operator: StringFilterOperator }) =>
      Boolean(filter.value) || isOperatorEmptyOrNotEmpty(filter.operator);

    const handleFilterChange = (filter: { value: string; operator: StringFilterOperator }) => {
      if (isValidFilter({ value: filter.value, operator: filter.operator })) {
        onFilterSave({ ...filter, dataKey });
      } else {
        onFilterClear(dataKey);
      }
    };

    if (!isInitialFilter && !currentFilterDataKeys.includes(dataKey)) {
      return null;
    }

    return (
      <Dropdown
        position="bottom-start"
        onClose={() => {
          if (isOperatorEmptyOrNotEmpty(operator)) {
            setInputValue('');

            setValue('');

            return;
          }

          setInputValue(value);
        }}
        renderOpener={({ open }) => (
          <FilterChip size="md" onClick={open} selected={isValidFilter({ value, operator })}>
            {label}
            {isOperatorEmptyOrNotEmpty(operator)
              ? `: ${operatorTranslation.filterLabel[operator as 'empty' | 'notEmpty']}`
              : value
              ? `: ${value}`
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

                              handleFilterChange({
                                value: isOperatorEmptyOrNotEmpty(operatorOption) ? '' : value,
                                operator: operatorOption,
                              });
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
                defaultValue={inputValue}
                onValueChange={({ value: newValue }) => {
                  if (!newValue) {
                    setValue(newValue);

                    handleFilterChange({
                      value: newValue,
                      operator,
                    });
                  }

                  setInputValue(newValue);
                }}
                onSubmit={() => {
                  setValue(inputValue);

                  handleFilterChange({
                    value: inputValue,
                    operator,
                  });
                }}
              />
            )}
          </VStack>
        )}
      />
    );
  }
);
