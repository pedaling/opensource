import { Children, cloneElement, isValidElement, useRef, useState } from 'react';
import { useConfig } from '@vibrant-ui/core';
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
        tableFilter: { add, initialize },
      },
    } = useConfig();

    const filterReferences = useRef<Record<string, TableFilterRefValue>>({});

    const [currentFilterDataKeys, setCurrentFilterDataKeys] = useState<string[]>(initialFilterDataKeys);

    const [isChanged, setIsChanged] = useState(false);

    const filterChildren = (Array.isArray(children) ? children : [children]).filter(child =>
      currentFilterDataKeys.includes(child.props.dataKey)
    );
    const filterElements =
      Children.toArray(children).filter(
        isValidElement<TableDateFilterProps | TableMultiSelectFilterProps | TableStringFilterProps>
      ) ?? [];

    const addFilter = (filterDataKey: string) => {
      setCurrentFilterDataKeys([...currentFilterDataKeys, filterDataKey]);

      onFilterChange?.(currentFilterDataKeys.map(key => filterReferences.current[key].value));

      setIsChanged(true);
    };

    const updateFilter = () => {
      onFilterChange?.(currentFilterDataKeys.map(key => filterReferences.current[key].value));

      setIsChanged(true);
    };

    const deleteFilter = (filterDataKey: string) => {
      setCurrentFilterDataKeys([...currentFilterDataKeys.filter(key => key !== filterDataKey)]);

      onFilterChange?.(currentFilterDataKeys.map(key => filterReferences.current[key].value));

      setIsChanged(true);
    };

    const onInitialize = () => {
      currentFilterDataKeys.forEach(key => {
        filterReferences.current[key].reset();
      });

      setCurrentFilterDataKeys(initialFilterDataKeys);

      onFilterChange?.(currentFilterDataKeys.map(key => filterReferences.current[key].value));

      setIsChanged(false);
    };

    return (
      <TableFilterGroupProvider
        updateFilter={updateFilter}
        deleteFilter={deleteFilter}
        isCurrentFilter={filterDataKey => currentFilterDataKeys.includes(filterDataKey)}
        isDeletableFilter={filterDataKey => !initialFilterDataKeys.includes(filterDataKey)}
      >
        <HStack width="100%" alignHorizontal="space-between" alignVertical="center">
          <HStack alignVertical="center" spacing={8}>
            {filterChildren.map(child =>
              cloneElement(child, {
                ref: (ref: any) => (filterReferences.current[child.props.dataKey] = ref),
              })
            )}
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
          </HStack>

          {isChanged && (
            <GhostButton size="md" color="onView2" IconComponent={Icon.RotateClockwise.Regular} onClick={onInitialize}>
              <Body color="onView2" level={2}>
                {initialize}
              </Body>
            </GhostButton>
          )}
        </HStack>
      </TableFilterGroupProvider>
    );
  }
);
