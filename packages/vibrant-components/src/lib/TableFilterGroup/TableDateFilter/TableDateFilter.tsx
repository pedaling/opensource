import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Box, useConfig, useCurrentTheme } from '@vibrant-ui/core';
import { getDateString, useCallbackRef } from '@vibrant-ui/utils';
import type { DatePickerFieldRefValue } from '../../DatePickerField';
import { DatePickerField } from '../../DatePickerField';
import { RangePickerField } from '../../RangePickerField';
import { useTableFilterGroup } from '../context';
import { TableFieldFilter } from '../TableFieldFilter';
import type { DateFilterOperator } from '../types';
import { isDateFilterValid, isValueRequiredOperator } from '../utils';
import { withTableDateFilterVariation } from './TableDateFilterProps';

export const TableDateFilter = withTableDateFilterVariation(
  ({
    innerRef,
    dataKey,
    label,
    operators = ['equals', 'notEquals', 'before', 'after', 'onOrBefore', 'onOrAfter', 'between', 'empty', 'notEmpty'],
    placeholder,
    defaultValue = {
      value: [],
      operator: operators[0],
    },
    maxWidth,
    lineLimit,
    testId = 'table-date-filter',
  }) => {
    const [value, setValue] = useState<Date[]>(defaultValue?.value);
    const [operator, setOperator] = useState<DateFilterOperator>(defaultValue?.operator);
    const {
      theme: { zIndex },
    } = useCurrentTheme();
    const { updateFilter } = useTableFilterGroup();
    const handleFilterChange = useCallbackRef(updateFilter);
    const prevOperatorRef = useRef<DateFilterOperator | undefined>();
    const [fieldAutoFocus, setFieldAutoFocus] = useState(false);
    const fieldRef = useRef<DatePickerFieldRefValue | null>(null);

    const {
      translations: {
        tableFilterGroup: {
          dateFilter: { operators: operatorTranslation, filterLabel: filterLabelTranslation },
        },
      },
    } = useConfig();

    useImperativeHandle(
      innerRef,
      () => ({
        reset: () => {
          setValue(defaultValue?.value);

          setOperator(defaultValue?.operator);
        },
        value: { value, operator, dataKey, type: 'date' as const },
        isDefaultState: value === defaultValue?.value && operator === defaultValue?.operator,
      }),
      [dataKey, defaultValue?.operator, defaultValue?.value, operator, value]
    );

    useEffect(() => {
      handleFilterChange();
    }, [operator, value, handleFilterChange]);

    useEffect(() => {
      if (!isDateFilterValid({ value, operator }) && prevOperatorRef.current !== operator) {
        fieldRef.current?.focus?.({
          preventScroll: true,
        });
      }

      prevOperatorRef.current = operator;
    }, [operator, value]);

    const focusFieldAfterOpeningAnimationEnds = () => {
      setTimeout(() => {
        setFieldAutoFocus(true);
      }, 200);
    };

    return (
      <TableFieldFilter
        testId={testId}
        dataKey={dataKey}
        onOpen={focusFieldAfterOpeningAnimationEnds}
        label={label.concat(
          isDateFilterValid({ value, operator })
            ? `: ${filterLabelTranslation[operator]
                .replace(/\{date\}|\{startDate\}/g, value?.[0] ? getDateString(value?.[0]) : '')
                .replace('{endDate}', value?.[1] ? getDateString(value?.[1]) : '')}`
            : ''
        )}
        minWidth={operator === 'between' ? 320 : 'auto'}
        active={isDateFilterValid({ value, operator })}
        onClose={() => {
          if (isValueRequiredOperator(operator)) {
            setValue([]);
          }

          setFieldAutoFocus(false);
        }}
        operatorOptions={operators.map(operator => ({ operator, label: operatorTranslation[operator] }))}
        selectedOperator={operator}
        onOperatorSelect={operatorOption => {
          setOperator(operatorOption);

          setFieldAutoFocus(false);

          if (operatorOption === 'between' || operator === 'between') {
            setValue([]);
          }
        }}
        field={
          !isValueRequiredOperator(operator) && (
            <Box px={20}>
              {operator === 'between' ? (
                <RangePickerField
                  ref={fieldRef}
                  zIndex={zIndex.dropdown + 1}
                  placeholder={placeholder}
                  defaultValue={value.length >= 2 ? { start: value[0], end: value[1] } : undefined}
                  autoFocus={fieldAutoFocus}
                  onValueChange={({ value: newValue }) => {
                    setValue(newValue ? [newValue.start, newValue.end] : []);
                  }}
                />
              ) : (
                <DatePickerField
                  ref={fieldRef}
                  zIndex={zIndex.dropdown + 1}
                  placeholder={placeholder}
                  defaultValue={defaultValue?.value?.[0] ?? value?.[0]}
                  autoFocus={fieldAutoFocus}
                  onValueChange={({ value: newValue }) => {
                    setValue(newValue ? [newValue] : []);

                    updateFilter();
                  }}
                />
              )}
            </Box>
          )
        }
        maxWidth={maxWidth}
        lineLimit={lineLimit}
      />
    );
  }
);
