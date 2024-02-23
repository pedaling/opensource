import { Children, Fragment, cloneElement, isValidElement, useRef, useState } from 'react';
import type { ComponentWithRef } from '@vibrant-ui/core';
import { ScrollBox, useConfig } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { Dropdown } from '../Dropdown';
import { GhostButton } from '../GhostButton';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import { VStack } from '../VStack';
import { TableFilterGroupProvider } from './context';
import type { TableDateFilterProps } from './TableDateFilter';
import { TableDateFilter } from './TableDateFilter';
import type { TableFilterGroupProps } from './TableFilterGroupProps';
import { withTableFilterGroupPropsVariation } from './TableFilterGroupProps';
import type { TableMultiSelectFilterProps } from './TableMultiSelectFilter';
import { TableMultiSelectFilter } from './TableMultiSelectFilter';
import type { TableRadioFilterProps } from './TableRadioFilter';
import { TableRadioFilter } from './TableRadioFilter';
import type { TableStringFilterProps } from './TableStringFilter';
import { TableStringFilter } from './TableStringFilter';
import type { TableFilterRefValue } from './types';

export const TableFilterGroup = withTableFilterGroupPropsVariation(
  ({ initialFilterDataKeys = [], onFilterChange, testId = 'table-filter-group', children }) => {
    const {
      translations: {
        tableFilterGroup: { add, initialize },
      },
    } = useConfig();

    const filterReferences = useRef<Record<string, TableFilterRefValue>>({});

    const [currentFilterDataKeys, setCurrentFilterDataKeys] = useState<string[]>(initialFilterDataKeys);

    const [isChanged, setIsChanged] = useState(false);

    const filterElements =
      Children.toArray(children).filter(
        isValidElement<TableDateFilterProps | TableMultiSelectFilterProps | TableStringFilterProps>
      ) ?? [];

    const isAvailableFilterExist =
      filterElements.filter(element => !currentFilterDataKeys.includes(element.props.dataKey)).length !== 0;

    function checkInitialButtonState() {
      if ([...initialFilterDataKeys].sort().join(',') !== [...currentFilterDataKeys].sort().join(',')) {
        setIsChanged(true);

        return;
      }

      setIsChanged(
        !currentFilterDataKeys
          .map(key => filterReferences.current[key].isDefaultState)
          .every(isDefault => isDefault === true)
      );
    }

    const addFilter = (filterDataKey: string) => {
      setCurrentFilterDataKeys([...currentFilterDataKeys, filterDataKey]);

      onFilterChange?.(
        currentFilterDataKeys
          .filter(key => filterReferences.current[key])
          .map(key => filterReferences.current[key].value)
      );

      checkInitialButtonState();
    };

    const updateFilter = () => {
      onFilterChange?.(
        currentFilterDataKeys
          .filter(key => filterReferences.current[key])
          .map(key => filterReferences.current[key].value)
      );

      checkInitialButtonState();
    };

    const deleteFilter = (filterDataKey: string) => {
      setCurrentFilterDataKeys([...currentFilterDataKeys.filter(key => key !== filterDataKey)]);

      onFilterChange?.(
        currentFilterDataKeys
          .filter(key => filterReferences.current[key])
          .map(key => filterReferences.current[key].value)
      );

      checkInitialButtonState();
    };

    const onInitialize = () => {
      currentFilterDataKeys.forEach(key => {
        filterReferences.current[key].reset();
      });

      setCurrentFilterDataKeys(initialFilterDataKeys);

      onFilterChange?.(currentFilterDataKeys.map(key => filterReferences.current[key].value));

      checkInitialButtonState();
    };

    return (
      <TableFilterGroupProvider
        updateFilter={updateFilter}
        deleteFilter={deleteFilter}
        isCurrentFilter={filterDataKey => currentFilterDataKeys.includes(filterDataKey)}
        isDeletableFilter={filterDataKey => !initialFilterDataKeys.includes(filterDataKey)}
      >
        <HStack width="100%" alignHorizontal="space-between" data-testid={testId}>
          <ScrollBox horizontal={true} hideScroll={true}>
            <HStack data-testid="filter-wrapper" alignVertical="center" spacing={8} flexShrink={0}>
              {currentFilterDataKeys.map(key => {
                const filterElement = filterElements.find(child => child.props.dataKey === key);

                return (
                  filterElement && (
                    <Fragment key={key}>
                      {cloneElement(filterElement, {
                        key,
                        ref: (ref: any) => (filterReferences.current[key] = ref),
                      })}
                    </Fragment>
                  )
                );
              })}

              {isAvailableFilterExist && (
                <Dropdown
                  position="bottom-start"
                  renderContents={({ close }) => (
                    <VStack>
                      {filterElements
                        .filter(element => !currentFilterDataKeys.includes(element.props.dataKey))
                        .map(element => (
                          <Pressable
                            data-testid={`${element.props.testId}-add`}
                            overlayColor="onView1"
                            interactions={['hover', 'focus', 'active']}
                            key={element.props.dataKey}
                            pl={20}
                            py={7}
                            onClick={() => {
                              addFilter(element.props.dataKey);

                              close();
                            }}
                          >
                            <Body level={2} weight="medium">
                              {element.props.label}
                            </Body>
                          </Pressable>
                        ))}
                    </VStack>
                  )}
                  renderOpener={({ open }) => (
                    <GhostButton testId="filter-add-button" size="md" IconComponent={Icon.Add.Regular} onClick={open}>
                      <Body level={2}>{add}</Body>
                    </GhostButton>
                  )}
                />
              )}
            </HStack>
          </ScrollBox>
          <HStack flexShrink={0} ml={24} alignVertical="center">
            {isChanged && (
              <GhostButton
                testId="filter-initialize-button"
                size="md"
                color="onView2"
                IconComponent={Icon.RotateClockwise.Regular}
                onClick={onInitialize}
              >
                <Body color="onView2" level={2}>
                  {initialize}
                </Body>
              </GhostButton>
            )}
          </HStack>
        </HStack>
      </TableFilterGroupProvider>
    );
  }
) as ComponentWithRef<TableFilterGroupProps> & {
  StringFilter: ComponentWithRef<TableStringFilterProps>;
  DateFilter: ComponentWithRef<TableDateFilterProps>;
  MultiSelectFilter: ComponentWithRef<TableMultiSelectFilterProps>;
  RadioFilter: ComponentWithRef<TableRadioFilterProps>;
};

TableFilterGroup.StringFilter = TableStringFilter;

TableFilterGroup.DateFilter = TableDateFilter;

TableFilterGroup.MultiSelectFilter = TableMultiSelectFilter;

TableFilterGroup.RadioFilter = TableRadioFilter;
