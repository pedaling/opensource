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
      currentFilterDataKeys={currentFilter}
      onFilterDelete={() => setCurrentFilter([])}
      onFilterSave={action('onFilterSave')}
      onFilterClear={action('onFilterClear')}
    >
      <TableDateFilter defaultValue={undefined} {...props} />
    </TableFilterGroupProvider>
  );
};

export const DefaultFilter: ComponentStory<typeof TableDateFilter> = props => (
  <TableFilterGroupProvider
    initialFilterDataKeys={['id']}
    currentFilterDataKeys={[]}
    onFilterDelete={action('onFilterDelete')}
    onFilterSave={action('onFilterSave')}
    onFilterClear={action('onFilterClear')}
  >
    <TableDateFilter {...props} />
  </TableFilterGroupProvider>
);
