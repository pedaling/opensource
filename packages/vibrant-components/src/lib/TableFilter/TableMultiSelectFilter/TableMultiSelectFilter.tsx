import { useEffect, useState } from 'react';
import { Box, useConfig } from '@vibrant-ui/core';
import { CheckboxGroupField } from '../../CheckboxGroupField';
import { Divider } from '../../Divider';
import { GhostButton } from '../../GhostButton';
import { Space } from '../../Space';
import { VStack } from '../../VStack';
import { useTableFilterGroup } from '../context';
import { TableFieldFilter } from '../TableFieldFilter';
import type { MultiSelectFilterOperator, Option } from '../type';
import { withTableMultiSelectFilterVariation } from './TableMultiSelectFilterProps';

const isOperatorEmptyOrNotEmpty = (op: MultiSelectFilterOperator) => op === 'empty' || op === 'notEmpty';
const isValidFilter = (filter: { value: Option['value'][]; operator: MultiSelectFilterOperator }) =>
  Boolean(filter.value.length > 0) || isOperatorEmptyOrNotEmpty(filter.operator);

export const TableMultiSelectFilter = withTableMultiSelectFilterVariation(
  ({ dataKey, label, options, operators = ['equals', 'notEquals', 'empty', 'notEmpty'], defaultValue }) => {
    const [selectedValues, setSelectedValues] = useState<Option['value'][]>(defaultValue?.value ?? []);
    const [operator, setOperator] = useState<MultiSelectFilterOperator>(defaultValue?.operator ?? operators[0]);
    const { onFilterSave, onFilterClear } = useTableFilterGroup();

    const {
      translations: {
        tableFilter: { multiSelectOperator: operatorTranslation, reset: resetTranslation },
      },
    } = useConfig();

    useEffect(() => {
      if (!isValidFilter({ value: selectedValues, operator })) {
        onFilterClear(dataKey);

        return;
      }

      onFilterSave({ value: isOperatorEmptyOrNotEmpty(operator) ? [] : selectedValues, operator, dataKey });
    }, [dataKey, onFilterClear, onFilterSave, operator, selectedValues]);

    return (
      <TableFieldFilter
        dataKey={dataKey}
        label={label}
        active={isValidFilter({ value: selectedValues, operator })}
        onClose={() => {
          if (isOperatorEmptyOrNotEmpty(operator)) {
            setSelectedValues([]);
          }
        }}
        operatorOptions={
          operators.reduce(
            (record, operator) => ({ ...record, [operator]: operatorTranslation[operator] }),
            {}
          ) as Record<MultiSelectFilterOperator, string>
        }
        selectedOperator={operator}
        onOperatorSelect={operatorOption => {
          setOperator(operatorOption);
        }}
        field={
          !isOperatorEmptyOrNotEmpty(operator) && (
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
                  onValueChange={value => {
                    setSelectedValues(Object.keys(value).filter(key => value[key]));
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
      />
    );
  }
);
