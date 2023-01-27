import { useEffect, useState } from 'react';
import { Box, useConfig } from '@vibrant-ui/core';
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
  ({ dataKey, label, options, operators = ['equals', 'notEquals', 'empty', 'notEmpty'], defaultValue }) => {
    const [selectedValues, setSelectedValues] = useState<Option['value'][]>(defaultValue?.value ?? []);
    const [operator, setOperator] = useState<MultiSelectFilterOperator>(defaultValue?.operator ?? operators[0]);
    const { saveFilter, clearFilter } = useTableFilterGroup();

    const {
      translations: {
        tableFilter: { multiSelectOperator: operatorTranslation, reset: resetTranslation },
      },
    } = useConfig();

    useEffect(() => {
      if (!isMultiSelectFilterValid({ value: selectedValues, operator })) {
        clearFilter(dataKey);

        return;
      }

      saveFilter({ value: isValueRequiredOperator(operator) ? [] : selectedValues, operator, dataKey });
    }, [dataKey, clearFilter, operator, selectedValues, saveFilter]);

    return (
      <TableFieldFilter
        dataKey={dataKey}
        label={
          label +
          (isMultiSelectFilterValid({ value: selectedValues, operator })
            ? `: ${operatorTranslation.filterLabel[operator].replace(
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
      />
    );
  }
);
