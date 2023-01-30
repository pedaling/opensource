import type { RefObject } from 'react';
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
import type { Filter, TableFilterRefValue } from './types';

export const TableFilterGroup = withTableFilterGroupPropsVariation(({ initialFilterDataKeys = [], children }) => {
  const {
    translations: {
      tableFilter: { add, initialize },
    },
  } = useConfig();

  const filterElements =
    Children.toArray(children).filter(
      isValidElement<TableDateFilterProps | TableMultiSelectFilterProps | TableStringFilterProps>
    ) ?? [];

  const filterReferences = useRef<Record<string, RefObject<TableFilterRefValue>>>({});

  const [currentFilterDataKeys, setCurrentFilterDataKeys] = useState<string[]>(initialFilterDataKeys);

  const updateFilter = (filter: Filter) => {
    setCurrentFilterDataKeys([...currentFilterDataKeys, filter.dataKey]);
  };

  const deleteFilter = (filterDataKey: string) => {
    setCurrentFilterDataKeys([...currentFilterDataKeys.filter(key => key !== filterDataKey)]);
  };

  const onInitialize = () => {
    currentFilterDataKeys.map(key => filterReferences.current[key].current?.reset);

    setCurrentFilterDataKeys(initialFilterDataKeys);
  };

  return (
    <TableFilterGroupProvider
      updateFilter={updateFilter}
      deleteFilter={deleteFilter}
      isCurrentFilter={filterDataKey => currentFilterDataKeys.includes(filterDataKey)}
      isDeletableFilter={filterDataKey => initialFilterDataKeys.includes(filterDataKey)}
    >
      <HStack width="100%" alignHorizontal="space-between" alignVertical="center">
        <HStack spacing={8} alignVertical="center">
          {children.map(child =>
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
                        setCurrentFilterDataKeys([...currentFilterDataKeys, element.props.dataKey]);

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
        {/* TODO: isAnyFilterModified 를 통해 초기화 버튼 유무를 제어해야 합니다 (LOU) */}
        <GhostButton size="md" color="onView2" IconComponent={Icon.RotateClockwise.Regular} onClick={onInitialize}>
          <Body color="onView2" level={2}>
            {initialize}
          </Body>
        </GhostButton>
      </HStack>
    </TableFilterGroupProvider>
  );
});
