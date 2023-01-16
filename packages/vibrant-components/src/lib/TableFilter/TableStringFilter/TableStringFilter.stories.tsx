import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroupProvider } from '../context';
import { TableStringFilter } from './TableStringFilter';

export default {
  title: 'TableStringFilter',
  component: TableStringFilter,
  args: {
    dataKey: 'id',
    label: 'ID',
    defaultValue: {
      value: '1234',
      operator: 'equals',
    },
  },
} as ComponentMeta<typeof TableStringFilter>;

export const Basic: ComponentStory<typeof TableStringFilter> = props => {
  const [currentFilter, setCurrentFilter] = useState<string[]>(['id']);

  return (
    <TableFilterGroupProvider
      currentFilterDataKeys={currentFilter}
      onFilterDelete={() => setCurrentFilter([])}
      onFilterSave={() => {}}
    >
      <TableStringFilter {...props} />
    </TableFilterGroupProvider>
  );
};

export const DefaultFilter: ComponentStory<typeof TableStringFilter> = props => (
  <TableFilterGroupProvider
    initialFilterDataKeys={['id']}
    currentFilterDataKeys={[]}
    onFilterDelete={() => {}}
    onFilterSave={() => {}}
  >
    <TableStringFilter {...props} />
  </TableFilterGroupProvider>
);
