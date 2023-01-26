import { useEffect, useState } from 'react';
import { Box, useConfig } from '@vibrant-ui/core';
import { TextField } from '../../TextField';
import { useTableFilterGroup } from '../context';
import { TableFieldFilter } from '../TableFieldFilter';
import type { StringFilterOperator } from '../types';
import { isStringFilterValid, isValueRequiredOperator } from '../utils';
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
    const { onFilterSave, onFilterClear } = useTableFilterGroup();

    const {
      translations: {
        tableFilter: { stringOperator: operatorTranslation },
      },
    } = useConfig();

    useEffect(() => {
      if (!isStringFilterValid({ value, operator })) {
        onFilterClear(dataKey);

        return;
      }

      onFilterSave({ value: isValueRequiredOperator(operator) ? '' : value, operator, dataKey });
    }, [dataKey, onFilterClear, onFilterSave, operator, value]);

    return (
      <TableFieldFilter
        dataKey={dataKey}
        label={label.concat(
          isValueRequiredOperator(operator)
            ? `: ${operatorTranslation.filterLabel[operator as 'empty' | 'notEmpty']}`
            : value
            ? `: ${value}`
            : ''
        )}
        active={isStringFilterValid({ value, operator })}
        onClose={() => {
          if (isValueRequiredOperator(operator)) {
            setInputValue('');

            setValue('');

            return;
          }

          setInputValue(value);
        }}
        operatorOptions={
          operators.reduce(
            (record, operator) => ({ ...record, [operator]: operatorTranslation[operator] }),
            {}
          ) as Record<StringFilterOperator, string>
        }
        selectedOperator={operator}
        onOperatorSelect={operatorOption => {
          setOperator(operatorOption);
        }}
        field={
          !isValueRequiredOperator(operator) && (
            <Box px={20}>
              <TextField
                placeholder={placeholder}
                clearable={true}
                defaultValue={inputValue}
                onValueChange={({ value: newValue }) => {
                  if (!newValue) {
                    setValue(newValue);
                  }

                  setInputValue(newValue);
                }}
                onSubmit={() => {
                  setValue(inputValue);
                }}
              />
            </Box>
          )
        }
      />
    );
  }
);
