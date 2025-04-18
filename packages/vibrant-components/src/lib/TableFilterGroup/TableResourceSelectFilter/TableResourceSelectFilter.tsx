import type { ReactElement } from 'react';
import React, { Children, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { Body, Divider, GhostButton, HStack, TextField, VStack } from '@vibrant-ui/components';
import { useConfig } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { useCallbackRef } from '@vibrant-ui/utils';
import { ResourceList } from '../../ResourceList';
import type { ResourceItemProps } from '../../ResourceList/ResourceItemProps';
import { useTableFilterGroup } from '../context';
import { TableFieldFilter } from '../TableFieldFilter';
import type { Filter, MultiSelectFilterOperator } from '../types';
import { isMultiSelectFilterValid, isValueRequiredOperator } from '../utils';
import { withTableResourceSelectFilterVariation } from './TableResourceSelectFilterProps';

export const TableResourceSelectFilter = withTableResourceSelectFilterVariation(
  ({
    innerRef,
    dataKey,
    label,
    operators = ['contains', 'notContains'],
    placeholder,
    children,
    defaultValue = {
      value: [],
      operator: operators[0],
    },
    searchInputProps,
    testId = 'table-resource-select-filter',
    ...resourceListProps
  }) => {
    const [value, setValue] = useState<string[]>(defaultValue?.value);
    const [operator, setOperator] = useState<MultiSelectFilterOperator>(defaultValue?.operator);
    const { updateFilter } = useTableFilterGroup();
    const handleFilterChange = useCallbackRef(updateFilter);
    const [reorderedChildren, setReorderedChildren] = useState(children);

    const {
      translations: {
        tableFilterGroup: {
          multiSelectFilter: { operators: operatorTranslation, reset: resetTranslation },
          resourceSelectFilter: { filterLabel: filterLabelTranslation },
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
        value: { value, operator, dataKey, type: 'multiSelect' } as Filter,
        isDefaultState: value === defaultValue?.value && operator === defaultValue?.operator,
      }),
      [dataKey, defaultValue?.operator, defaultValue?.value, operator, value]
    );

    useEffect(() => {
      handleFilterChange();
    }, [operator, value, handleFilterChange]);

    const selectedItems = useMemo(
      () =>
        Children.map(children, child => ({
          id: child.props.id,
          title: child.props.title,
        }))
          .filter(item => item.id && value.includes(item.id))
          .map(item => item.title),
      [children, value]
    );

    const sortChildren = () => {
      setReorderedChildren(children => {
        const childrenArray = Children.map(children, child => child);

        if (!value.length) {
          return childrenArray;
        }

        const selectedChildren: ReactElement<ResourceItemProps>[] = [];
        const unselectedChildren: ReactElement<ResourceItemProps>[] = [];

        childrenArray.forEach(child => {
          if (React.isValidElement(child) && child.props.id && value.includes(child.props.id)) {
            selectedChildren.push(child);
          } else {
            unselectedChildren.push(child);
          }
        });

        return [...selectedChildren, ...unselectedChildren];
      });
    };

    const filterLabel = useMemo(() => {
      if (!value?.length) {
        return label;
      }

      if (operator === 'notContains') {
        return `${label}: ${filterLabelTranslation.notContains.replace('{options}', selectedItems.join(', '))}`;
      }

      if (value.length === 1) {
        return `${label}: ${filterLabelTranslation.contains.one.replace('{firstOption}', selectedItems[0])}`;
      }

      return `${label}: ${filterLabelTranslation.contains.overOne
        .replace('{options}', `[${selectedItems.join(', ')}]`)
        .replace('{firstOption}', selectedItems[0])
        .replace('{count}', String(selectedItems.length - 1))}`;
    }, [value, operator, label, filterLabelTranslation, selectedItems]);

    const handleClose = () => {
      if (isValueRequiredOperator(operator)) {
        setValue([]);
      }
    };

    const handleOperatorSelect = (operatorOption: MultiSelectFilterOperator) => {
      setOperator(operatorOption);
    };

    return (
      <TableFieldFilter
        testId={testId}
        dataKey={dataKey}
        label={filterLabel}
        active={isMultiSelectFilterValid({ value, operator })}
        onOpen={sortChildren}
        onClose={handleClose}
        operatorOptions={operators.map(operator => ({ operator, label: operatorTranslation[operator] }))}
        selectedOperator={operator}
        onOperatorSelect={handleOperatorSelect}
        field={
          <VStack>
            <VStack px={16} spacing={8}>
              <TextField
                renderStart={() => <Icon.Search.Thin fill="onView2" size={20} />}
                placeholder={placeholder}
                type="search"
                size="md"
                {...searchInputProps}
              />
              <ResourceList
                {...resourceListProps}
                multiSelect={true}
                selectedIds={value}
                onChangeSelectedIds={setValue}
              >
                {reorderedChildren}
              </ResourceList>
            </VStack>
            {value.length > 0 && (
              <>
                <Divider direction="horizontal" />
                <HStack width="100%" alignHorizontal="space-between" px={16} pt={16} pb={4}>
                  <Body level={2}>{value.length}개 선택</Body>
                  <GhostButton size="md" onClick={() => setValue([])}>
                    {resetTranslation}
                  </GhostButton>
                </HStack>
              </>
            )}
          </VStack>
        }
      />
    );
  }
);
