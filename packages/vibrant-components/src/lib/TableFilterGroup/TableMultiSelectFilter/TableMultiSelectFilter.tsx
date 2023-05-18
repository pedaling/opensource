import { useEffect, useImperativeHandle, useState } from 'react';
import { Box, useConfig } from '@vibrant-ui/core';
import { useCallbackRef } from '@vibrant-ui/utils';
import { CheckboxGroupField } from '../../CheckboxGroupField';
import { Divider } from '../../Divider';
import { GhostButton } from '../../GhostButton';
import { Space } from '../../Space';
import { VStack } from '../../VStack';
import { useTableFilterGroup } from '../context';
import { TableFieldFilter } from '../TableFieldFilter';
import type { MultiSelectFilterOperator, Option } from '../types';
import { isMultiSelectFilterValid, isValueRequiredOperator } from '../utils';
import { withTableMultiSelectFilterVariation } from './TableMultiSelectFilterProps';

export const TableMultiSelectFilter = withTableMultiSelectFilterVariation(
  ({
    innerRef,
    dataKey,
    label,
    options,
    operators = ['contains', 'notContains'],
    defaultValue = {
      value: [],
      operator: operators[0],
    },
    maxWidth,
    lineLimit,
    testId = 'table-multi-select-filter',
  }) => {
    const [selectedValues, setSelectedValues] = useState<Option['value'][]>(defaultValue?.value);
    const [operator, setOperator] = useState<MultiSelectFilterOperator>(defaultValue?.operator);
    const { updateFilter } = useTableFilterGroup();
    const handleFilterChange = useCallbackRef(updateFilter);

    const {
      translations: {
        tableFilterGroup: {
          multiSelectFilter: {
            operators: operatorTranslation,
            filterLabel: filterLabelTranslation,
            reset: resetTranslation,
          },
        },
      },
    } = useConfig();

    useImperativeHandle(
      innerRef,
      () => ({
        reset: () => {
          setSelectedValues(defaultValue?.value);

          setOperator(defaultValue?.operator);
        },
        value: { value: selectedValues, operator, dataKey, type: 'multiSelect' as const },
        isDefaultState:
          [...selectedValues].sort().join(',') === [...defaultValue.value].sort().join(',') &&
          operator === defaultValue?.operator,
      }),
      [dataKey, defaultValue, operator, selectedValues]
    );

    useEffect(() => {
      handleFilterChange();
    }, [selectedValues, operator, handleFilterChange]);

    return (
      <TableFieldFilter
        testId={testId}
        dataKey={dataKey}
        label={
          label +
          (isMultiSelectFilterValid({ value: selectedValues, operator })
            ? `: ${filterLabelTranslation[operator].replace(
                '{options}',
                selectedValues
                  .map(selectedValue => options.find(option => option.value === selectedValue)?.label)
                  .join(', ')
              )}`
            : '')
        }
        active={isMultiSelectFilterValid({ value: selectedValues, operator })}
        onClose={() => {
          if (isValueRequiredOperator(operator)) {
            setSelectedValues([]);
          }
        }}
        operatorOptions={operators.map(operator => ({ operator, label: operatorTranslation[operator] }))}
        selectedOperator={operator}
        onOperatorSelect={operatorOption => {
          setOperator(operatorOption);
        }}
        field={
          !isValueRequiredOperator(operator) && (
            <VStack>
              <Box px={20}>
                <CheckboxGroupField
                  options={options}
                  defaultValue={options.reduce(
                    (record, option) => ({
                      ...record,
                      [option.value]: selectedValues.includes(option.value),
                    }),
                    {}
                  )}
                  onValueChange={newValue => {
                    setSelectedValues(Object.keys(newValue).filter(key => newValue[key]));
                  }}
                />
              </Box>
              {selectedValues.length > 0 && (
                <>
                  <Space height={16} />
                  <Divider direction="horizontal" />
                  <Box px={20} pt={20}>
                    <GhostButton size="md" onClick={() => setSelectedValues([])}>
                      {resetTranslation}
                    </GhostButton>
                  </Box>
                </>
              )}
            </VStack>
          )
        }
        maxWidth={maxWidth}
        lineLimit={lineLimit}
      />
    );
  }
);
