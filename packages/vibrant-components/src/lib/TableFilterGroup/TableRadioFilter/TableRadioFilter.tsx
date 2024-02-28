import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Box, useConfig } from '@vibrant-ui/core';
import { useCallbackRef } from '@vibrant-ui/utils';
import { Divider } from '../../Divider';
import { GhostButton } from '../../GhostButton';
import { Radio } from '../../Radio';
import { RadioGroupField } from '../../RadioGroupField';
import { Space } from '../../Space';
import { VStack } from '../../VStack';
import { useTableFilterGroup } from '../context';
import { TableFieldFilter } from '../TableFieldFilter';
import type { Option, RadioFilterOperator } from '../types';
import { isRadioFilterValid, isValuelessOperator } from '../utils';
import { withTableRadioFilterVariation } from './TableRadioFilterProps';

export const TableRadioFilter = withTableRadioFilterVariation(
  ({
    innerRef,
    dataKey,
    label,
    options,
    operators = ['equals', 'notEquals', 'empty', 'notEmpty'],
    defaultValue = {
      operator: operators[0],
    },
    maxWidth,
    lineLimit,
    testId,
  }) => {
    const [value, setValue] = useState<Option['value']>(defaultValue?.value ?? '');
    const [operator, setOperator] = useState<RadioFilterOperator>(defaultValue?.operator);
    const { updateFilter } = useTableFilterGroup();
    const handleFilterChange = useCallbackRef(updateFilter);
    const isMountedRef = useRef(false);

    const {
      translations: {
        tableFilterGroup: {
          radioFilter: { operators: operatorTranslation, filterLabel: filterLabelTranslation, reset: resetTranslation },
        },
      },
    } = useConfig();

    useImperativeHandle(
      innerRef,
      () => ({
        reset: () => {
          setValue(defaultValue?.value ?? '');

          setOperator(defaultValue?.operator);
        },
        value: { value, operator, dataKey, type: 'radio' as const },
        isDefaultState: value === defaultValue.value && operator === defaultValue?.operator,
      }),
      [dataKey, defaultValue?.operator, defaultValue.value, operator, value]
    );

    useEffect(() => {
      if (isMountedRef.current) {
        handleFilterChange();
      }

      isMountedRef.current = true;
    }, [operator, value, handleFilterChange]);

    return (
      <TableFieldFilter
        testId={testId}
        dataKey={dataKey}
        label={label.concat(
          isValuelessOperator(operator)
            ? `: ${filterLabelTranslation[operator as 'empty' | 'notEmpty']}`
            : value
              ? `: ${options.find(option => option.value === value)?.label}`
              : ''
        )}
        active={isRadioFilterValid({ value, operator })}
        onClose={() => {
          if (isValuelessOperator(operator)) {
            setValue('');
          }
        }}
        operatorOptions={operators.map(operator => ({ operator, label: operatorTranslation[operator] }))}
        selectedOperator={operator}
        onOperatorSelect={operatorOption => {
          setOperator(operatorOption);
        }}
        field={
          !isValuelessOperator(operator) && (
            <VStack>
              <RadioGroupField name={dataKey} onChange={({ value }) => setValue(value)} value={value}>
                <VStack spacing={16} px={20}>
                  {options.map(option => (
                    <Radio key={option.value} value={option.value} label={option.label} />
                  ))}
                </VStack>
              </RadioGroupField>
              {Boolean(value) && (
                <>
                  <Space height={16} />
                  <Divider direction="horizontal" />
                  <Box px={20} pt={20}>
                    <GhostButton size="md" onClick={() => setValue('')}>
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
