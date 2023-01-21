import { useState } from 'react';
import { useConfig } from '@vibrant-ui/core';
import { useTableFilterGroup } from '../../TableFilterGroup/context';
import { TextField } from '../../TextField';
import { TableFieldFilter } from '../TableFieldFilter';
import type { StringFilterOperator } from '../type';
import { withTableStringFilterVariation } from './TableStringFilterProps';

const isOperatorEmptyOrNotEmpty = (op: StringFilterOperator) => op === 'empty' || op === 'notEmpty';
const isValidFilter = (filter: { value: string; operator: StringFilterOperator }) =>
  Boolean(filter.value) || isOperatorEmptyOrNotEmpty(filter.operator);

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
    const { onFilterSave, onFilterClear, isFilterShown } = useTableFilterGroup();

    const {
      translations: {
        tableFilter: { stringOperator: operatorTranslation },
      },
    } = useConfig();

    const onSave = (value: string) => {
      if (!isValidFilter({ value, operator })) {
        onFilterClear(dataKey);

        return;
      }

      onFilterSave({ value: isOperatorEmptyOrNotEmpty(operator) ? '' : value, operator, dataKey, label });
    };

    return isFilterShown(dataKey) ? (
      <TableFieldFilter
        dataKey={dataKey}
        label={label.concat(
          isOperatorEmptyOrNotEmpty(operator)
            ? `: ${operatorTranslation.filterLabel[operator as 'empty' | 'notEmpty']}`
            : value
            ? `: ${value}`
            : ''
        )}
        active={isValidFilter({ value, operator })}
        onClose={() => {
          if (isOperatorEmptyOrNotEmpty(operator)) {
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
          !isOperatorEmptyOrNotEmpty(operator) && (
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

                onSave(value);
              }}
            />
          )
        }
      />
    ) : null;
  }
);
