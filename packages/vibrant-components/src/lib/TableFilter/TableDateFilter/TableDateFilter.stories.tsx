/* eslint-disable no-console */
import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroupProvider } from '../context';
import { TableDateFilter } from './TableDateFilter';

export default {
  title: 'TableDateFilter',
  component: TableDateFilter,
  args: {
    dataKey: 'createdAt',
    label: '생성일',
  },
} as ComponentMeta<typeof TableDateFilter>;

export const Basic: ComponentStory<typeof TableDateFilter> = props => {
  const [currentFilter, setCurrentFilter] = useState<string[]>(['createdAt']);

  return (
    <TableFilterGroupProvider
      currentFilterDataKeys={currentFilter}
      onFilterDelete={() => setCurrentFilter([])}
      onFilterSave={filter => console.log(filter)}
      onFilterClear={filterKey => console.log(filterKey)}
    >
      <TableDateFilter defaultValue={undefined} {...props} />
    </TableFilterGroupProvider>
  );
};

export const DefaultFilter: ComponentStory<typeof TableDateFilter> = props => (
  <TableFilterGroupProvider
    initialFilterDataKeys={['id']}
    currentFilterDataKeys={[]}
    onFilterDelete={() => {}}
    onFilterSave={filter => console.log(filter)}
    onFilterClear={filterKey => console.log(filterKey)}
  >
    <TableDateFilter {...props} />
  </TableFilterGroupProvider>
);
