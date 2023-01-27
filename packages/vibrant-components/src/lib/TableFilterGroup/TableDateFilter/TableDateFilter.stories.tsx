import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroupProvider } from '../../TableFilterGroup/context';
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
      isFilterVisible={dataKey => currentFilter.includes(dataKey)}
      isDeletableFilter={() => true}
      deleteFilter={() => setCurrentFilter([])}
      saveFilter={action('saveFilter')}
      clearFilter={action('clearFilter')}
    >
      <TableDateFilter defaultValue={undefined} {...props} />
    </TableFilterGroupProvider>
  );
};

export const DefaultFilter: ComponentStory<typeof TableDateFilter> = props => (
  <TableFilterGroupProvider
    isFilterVisible={() => true}
    isDeletableFilter={() => false}
    deleteFilter={action('deleteFilter')}
    saveFilter={action('saveFilter')}
    clearFilter={action('clearFilter')}
  >
    <TableDateFilter {...props} />
  </TableFilterGroupProvider>
);
