import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroupProvider } from '../../TableFilterGroup/context';
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
      isFilterVisible={dataKey => currentFilter.includes(dataKey)}
      isDeletableFilter={() => true}
      deleteFilter={() => setCurrentFilter([])}
      saveFilter={action('saveFilter')}
      clearFilter={action('clearFilter')}
    >
      <TableStringFilter {...props} />
    </TableFilterGroupProvider>
  );
};

export const DefaultFilter: ComponentStory<typeof TableStringFilter> = props => (
  <TableFilterGroupProvider
    isFilterVisible={() => true}
    isDeletableFilter={() => false}
    deleteFilter={action('deleteFilter')}
    saveFilter={action('saveFilter')}
    clearFilter={action('clearFilter')}
  >
    <TableStringFilter {...props} />
  </TableFilterGroupProvider>
);
