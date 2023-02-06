import { Children, Fragment, cloneElement, isValidElement, useRef, useState } from 'react';
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
import { withTableFilterGroupPropsVariation } from './TableFilterGroupProps';
import type { TableMultiSelectFilterProps } from './TableMultiSelectFilter';
import type { TableStringFilterProps } from './TableStringFilter';
import type { TableFilterRefValue } from './types';

export const TableFilterGroup = withTableFilterGroupPropsVariation(
  ({ initialFilterDataKeys = [], onFilterChange, children }) => {
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
        <HStack width="100%" alignHorizontal="space-between">
          <ScrollBox horizontal={true} hideScroll={true}>
            <HStack alignVertical="center" spacing={8} flexShrink={0}>
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
                    <GhostButton size="md" IconComponent={Icon.Add.Regular} onClick={open}>
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
);
