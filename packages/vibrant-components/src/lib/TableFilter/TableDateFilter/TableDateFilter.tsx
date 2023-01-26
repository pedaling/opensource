import { useEffect, useState } from 'react';
import { Box, useConfig, useCurrentTheme } from '@vibrant-ui/core';
import { getDateString } from '@vibrant-ui/utils';
import { DatePickerField } from '../../DatePickerField';
import { RangePickerField } from '../../RangePickerField';
import { useTableFilterGroup } from '../context';
import { TableFieldFilter } from '../TableFieldFilter';
import type { DateFilterOperator } from '../types';
import { isDateFilterValid, isValueRequiredOperator } from '../utils';
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
    const { onFilterSave, onFilterClear } = useTableFilterGroup();

    const {
      translations: {
        tableFilter: { dateOperator: operatorTranslation },
      },
    } = useConfig();

    useEffect(() => {
      if (!isDateFilterValid({ value, operator })) {
        onFilterClear(dataKey);

        return;
      }

      onFilterSave({ dataKey, value: isValueRequiredOperator(operator) ? [] : value, operator });
    }, [dataKey, onFilterClear, onFilterSave, operator, value]);

    return (
      <TableFieldFilter
        dataKey={dataKey}
        label={label.concat(
          isDateFilterValid({ value, operator })
            ? `: ${operatorTranslation.filterLabel[operator]
                .replace(/\{date\}|\{startDate\}/g, value?.[0] ? getDateString(value?.[0]) : '')
                .replace('{endDate}', value?.[1] ? getDateString(value?.[1]) : '')}`
            : ''
        )}
        width={operator === 'between' ? 320 : 240}
        active={isDateFilterValid({ value, operator })}
        onClose={() => {
          if (isValueRequiredOperator(operator)) {
            setValue([]);
          }
        }}
        operatorOptions={
          operators.reduce(
            (record, operator) => ({ ...record, [operator]: operatorTranslation[operator] }),
            {}
          ) as Record<DateFilterOperator, string>
        }
        selectedOperator={operator}
        onOperatorSelect={operatorOption => {
          setOperator(operatorOption);
        }}
        field={
          !isValueRequiredOperator(operator) && (
            <Box px={20}>
              {operator === 'between' ? (
                <RangePickerField
                  zIndex={zIndex.dropdown + 1}
                  placeholder={placeholder}
                  defaultValue={value.length >= 2 ? { start: value[0], end: value[1] } : undefined}
                  onValueChange={({ value: newValue }) => {
                    setValue(newValue ? [newValue.start, newValue.end] : []);
                  }}
                />
              ) : (
                <DatePickerField
                  zIndex={zIndex.dropdown + 1}
                  placeholder={placeholder}
                  defaultValue={defaultValue?.value?.[0] ?? value?.[0]}
                  onValueChange={({ value: newValue }) => {
                    setValue(newValue ? [newValue] : []);
                  }}
                />
              )}
            </Box>
          )
        }
      />
    );
  }
);
