import { Children, isValidElement, useState } from 'react';
import { useConfig } from '@vibrant-ui/core';
import { Icon } from '@vibrant-ui/icons';
import { Body } from '../Body';
import { Dropdown } from '../Dropdown';
import { GhostButton } from '../GhostButton';
import { HStack } from '../HStack';
import { Pressable } from '../Pressable';
import type { Filter } from '../TableFilter/type';
import { VStack } from '../VStack';
import { TableFilterGroupProvider } from './context';
import { TableFilterGroupConsumer } from './context/TableFilterGroupContext';
import { withTableFilterGroupPropsVariation } from './TableFilterGroupProps';

export const TableFilterGroup = withTableFilterGroupPropsVariation(({ initialFilterDataKeys = [], children }) => {
  const {
    translations: {
      tableFilter: { add, initialize },
    },
  } = useConfig();

  const filterElements = (Children.toArray(children).filter(child => isValidElement(child)) as typeof children) ?? [];

  const [availableFilterDataKeys, setAvailableFilterDataKeys] = useState<string[]>(
    filterElements
      .filter(element => !initialFilterDataKeys.includes(element.props.dataKey))
      .map(filter => filter.props.dataKey)
  );

  function getFilterElement(dataKey: string): Filter {
    return filterElements.find(filter => filter.props.dataKey === dataKey)?.props as any as Filter;
  }

  const [validFilters, setValidFilters] = useState<Filter[]>(
    filterElements.filter(element => initialFilterDataKeys.includes(element.props.dataKey)).map(filter => filter.props)
  );

  const onFilterSave = (filter: Filter) => {
    if (!availableFilterDataKeys.includes(filter.dataKey)) {
      return;
    }

    setAvailableFilterDataKeys(availableFilterDataKeys.filter(dataKey => dataKey !== filter.dataKey));

    setValidFilters([...validFilters, filter]);
  };

  const onFilterDelete = (filterDataKey: string) => {
    setAvailableFilterDataKeys([...availableFilterDataKeys, filterDataKey]);
  };

  const onFilterClear = (filterDataKey: string) => {
    setValidFilters(validFilters.filter(filter => filter.dataKey !== filterDataKey));
  };

  const onInitialize = () => {};

  return (
    <TableFilterGroupProvider
      initialFilterDataKeys={initialFilterDataKeys}
      onFilterClear={onFilterClear}
      onFilterDelete={onFilterDelete}
      onFilterSave={onFilterSave}
    >
      <TableFilterGroupConsumer>
        {({ onFilterSave, isFilterChanged }) => (
          <HStack width="100%" alignHorizontal="space-between" alignVertical="center">
            <HStack spacing={8} alignVertical="center">
              {children}
              <Dropdown
                position="bottom-start"
                renderContents={({ close }) => (
                  <VStack>
                    {availableFilterDataKeys.map(dataKey => {
                      const filter = getFilterElement(dataKey);

                      return (
                        <Pressable
                          overlayColor="onView1"
                          interactions={['hover', 'focus', 'active']}
                          key={dataKey}
                          pl={20}
                          py={7}
                          onClick={() => {
                            onFilterSave(filter);

                            close();
                          }}
                        >
                          <Body level={2} weight="medium">
                            {filter.label}
                          </Body>
                        </Pressable>
                      );
                    })}
                  </VStack>
                )}
                renderOpener={({ open }) => (
                  <GhostButton size="md" IconComponent={Icon.Add.Regular} onClick={open}>
                    <Body level={2}>{add}</Body>
                  </GhostButton>
                )}
              />
            </HStack>
            {isFilterChanged && (
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
        )}
      </TableFilterGroupConsumer>
    </TableFilterGroupProvider>
  );
});
