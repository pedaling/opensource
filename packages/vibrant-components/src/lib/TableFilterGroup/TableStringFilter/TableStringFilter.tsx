import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import type { TextInputRef } from '@vibrant-ui/core';
import { Box, useConfig } from '@vibrant-ui/core';
import { useCallbackRef } from '@vibrant-ui/utils';
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
    defaultValue = {
      value: '',
      operator: operators[0],
    },
    maxWidth,
    lineLimit,
    testId = 'table-string-filter',
  }) => {
    const [inputValue, setInputValue] = useState<string>(defaultValue?.value);
    const [operator, setOperator] = useState<StringFilterOperator>(defaultValue?.operator);
    const [value, setValue] = useState<string>(inputValue);
    const { updateFilter } = useTableFilterGroup();
    const handleFilterChange = useCallbackRef(updateFilter);
    const filedRef = useRef<TextInputRef | null>();

    const {
      translations: {
        tableFilterGroup: {
          stringFilter: { operators: operatorsTranslation, filterLabel: filterLabelTranslation },
        },
      },
    } = useConfig();

    useImperativeHandle(
      innerRef,
      () => ({
        reset: () => {
          setInputValue(defaultValue?.value);

          setValue(defaultValue?.value);

          setOperator(defaultValue?.operator);
        },
        value: { value, operator, dataKey, type: 'string' as const },
        isDefaultState: value === defaultValue?.value && operator === defaultValue?.operator,
      }),
      [dataKey, defaultValue?.operator, defaultValue?.value, operator, value]
    );

    useEffect(() => {
      handleFilterChange();
    }, [value, operator, handleFilterChange]);

    useEffect(() => {
      filedRef.current?.focus();
    }, [operator]);

    return (
      <TableFieldFilter
        dataKey={dataKey}
        testId={testId}
        label={label.concat(
          isValueRequiredOperator(operator)
            ? `: ${filterLabelTranslation[operator as 'empty' | 'notEmpty']}`
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
        operatorOptions={operators.map(operator => ({ operator, label: operatorsTranslation[operator] }))}
        selectedOperator={operator}
        onOperatorSelect={operatorOption => {
          setOperator(operatorOption);
        }}
        field={
          !isValueRequiredOperator(operator) && (
            <Box px={20}>
              <TextField
                ref={filedRef}
                autoFocus={true}
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
        maxWidth={maxWidth}
        lineLimit={lineLimit}
      />
    );
  }
);
