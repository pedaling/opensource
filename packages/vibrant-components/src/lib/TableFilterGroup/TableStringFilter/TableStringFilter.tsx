import { useEffect, useImperativeHandle, useState } from 'react';
import { Box, useConfig } from '@vibrant-ui/core';
import { TextField } from '../../TextField';
import { useTableFilterGroup } from '../context';
import { TableFieldFilter } from '../TableFieldFilter';
import type { StringFilterOperator } from '../types';
import { isStringFilterValid, isValueRequiredOperator } from '../utils';
import { withTableStringFilterVariation } from './TableStringFilterProps';

export const TableStringFilter = withTableStringFilterVariation(
  ({
    innerRef,
    dataKey,
    label,
    operators = ['equals', 'notEquals', 'contains', 'notContains', 'empty', 'notEmpty'],
    placeholder,
    defaultValue,
  }) => {
    const [inputValue, setInputValue] = useState<string>(defaultValue?.value ?? '');
    const [operator, setOperator] = useState<StringFilterOperator>(defaultValue?.operator ?? operators[0]);
    const [value, setValue] = useState<string>(inputValue);
    const { updateFilter } = useTableFilterGroup();

    const {
      translations: {
        tableFilter: { stringOperator: operatorTranslation },
      },
    } = useConfig();

    useImperativeHandle(
      innerRef,
      () => ({
        reset: () => {
          setInputValue(defaultValue?.value ?? '');

          setValue(defaultValue?.value ?? '');

          setOperator(defaultValue?.operator ?? operators[0]);
        },
        value: { value, operator, dataKey, type: 'string' as const },
      }),
      [dataKey, defaultValue?.operator, defaultValue?.value, operator, operators, value]
    );

    useEffect(() => {
      updateFilter();
    }, [value, operator, updateFilter]);

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
        operatorOptions={operators.map(operator => ({ operator, label: operatorTranslation[operator] }))}
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
