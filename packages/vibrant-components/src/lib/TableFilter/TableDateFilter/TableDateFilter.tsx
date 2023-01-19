import { useState } from 'react';
import { useConfig, useCurrentTheme } from '@vibrant-ui/core';
import { getDateString } from '@vibrant-ui/utils';
import { Body } from '../../Body';
import { DatePickerField } from '../../DatePickerField';
import { Dropdown } from '../../Dropdown';
import { FilterChip } from '../../FilterChip';
import { GhostButton } from '../../GhostButton';
import { HStack } from '../../HStack';
import { Pressable } from '../../Pressable';
import { RangePickerField } from '../../RangePickerField';
import { VStack } from '../../VStack';
import { useTableFilterGroup } from '../context';
import type { DateFilterOperator } from '../type';
import { withTableDateFilterVariation } from './TableDateFilterProps';

export const TableDateFilter = withTableDateFilterVariation(
  ({
    dataKey,
    label,
    operators = ['equals', 'notEquals', 'before', 'after', 'onOrBefore', 'onOrAfter', 'between', 'empty', 'notEmpty'],
    placeholder,
    defaultValue,
  }) => {
    const [value, setValue] = useState<Date[]>(defaultValue?.value ?? []);
    const [operator, setOperator] = useState<DateFilterOperator>(defaultValue?.operator ?? operators[0]);
    const {
      theme: { zIndex },
    } = useCurrentTheme();
    const { initialFilterDataKeys, currentFilterDataKeys, onFilterDelete, onFilterSave, onFilterClear } =
      useTableFilterGroup();

    const {
      translations: {
        tableFilter: { dateOperator: operatorTranslation, delete: deleteTranslation },
      },
    } = useConfig();

    const isInitialFilter = initialFilterDataKeys.includes(dataKey);
    const isOperatorEmptyOrNotEmpty = (op: DateFilterOperator) => op === 'empty' || op === 'notEmpty';
    const isOperatorBetween = (op: DateFilterOperator) => op === 'between';
    const isValidFilter = (filter: { value: Date[]; operator: DateFilterOperator }) => {
      if (isOperatorEmptyOrNotEmpty(filter.operator)) return true;

      if (isOperatorBetween(filter.operator)) return filter.value.length >= 2;

      return filter.value.length >= 1;
    };

    const handleFilterChange = (filter: { value: Date[]; operator: DateFilterOperator }) => {
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
            setValue([]);
          }
        }}
        renderOpener={({ open }) => (
          <FilterChip size="md" onClick={open} selected={isValidFilter({ value, operator })}>
            {label}
            {isValidFilter({ value, operator })
              ? `: ${operatorTranslation.filterLabel[operator]
                  .replace(/\{date\}|\{startDate\}/g, value?.[0] ? getDateString(value?.[0]) : '')
                  .replace('{endDate}', value?.[1] ? getDateString(value?.[1]) : '')}`
              : null}
          </FilterChip>
        )}
        renderContents={() => (
          <VStack px={20} spacing={16}>
            <HStack
              alignHorizontal="space-between"
              alignVertical="center"
              width={isOperatorBetween(operator) ? 280 : 'auto'}
            >
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
                                value: isOperatorEmptyOrNotEmpty(operatorOption) ? [] : value,
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
            {!isOperatorEmptyOrNotEmpty(operator) &&
              (isOperatorBetween(operator) ? (
                <RangePickerField
                  zIndex={zIndex.dropdown + 1}
                  placeholder={placeholder}
                  defaultValue={value.length >= 2 ? { start: value[0], end: value[1] } : undefined}
                  onValueChange={({ value }) => {
                    const newValue = value ? [value.start, value.end] : [];

                    setValue(newValue);

                    handleFilterChange({
                      value: newValue,
                      operator,
                    });
                  }}
                />
              ) : (
                <DatePickerField
                  zIndex={zIndex.dropdown + 1}
                  placeholder={placeholder}
                  defaultValue={defaultValue?.value?.[0] ?? value?.[0]}
                  onValueChange={({ value }) => {
                    const newValue = value ? [value] : [];

                    setValue(newValue);

                    handleFilterChange({
                      value: newValue,
                      operator,
                    });
                  }}
                />
              ))}
          </VStack>
        )}
      />
    );
  }
);
