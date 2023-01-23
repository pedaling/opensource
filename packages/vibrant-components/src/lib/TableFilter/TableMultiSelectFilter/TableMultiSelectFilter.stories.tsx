import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroupProvider } from '../context';
import { TableMultiSelectFilter } from './TableMultiSelectFilter';

export default {
  title: 'TableMultiSelectFilter',
  component: TableMultiSelectFilter,
  args: {
    dataKey: 'status',
    label: '상태',
    options: [
      {
        value: '1',
        label: 'Option1',
      },
      {
        value: '2',
        label: 'Option2',
      },
      {
        value: '3',
        label: 'Option3',
      },
    ],
  },
} as ComponentMeta<typeof TableMultiSelectFilter>;

export const Basic: ComponentStory<typeof TableMultiSelectFilter> = props => {
  const [currentFilter, setCurrentFilter] = useState<string[]>(['status']);

  return (
    <TableFilterGroupProvider
      currentFilterDataKeys={currentFilter}
      onFilterDelete={() => setCurrentFilter([])}
      onFilterSave={action('onFilterSave')}
      onFilterClear={action('onFilterClear')}
    >
      <TableMultiSelectFilter {...props} />
    </TableFilterGroupProvider>
  );
};

export const DefaultFilter: ComponentStory<typeof TableMultiSelectFilter> = props => (
  <TableFilterGroupProvider
    initialFilterDataKeys={['status']}
    currentFilterDataKeys={[]}
    onFilterDelete={action('onFilterDelete')}
    onFilterSave={action('onFilterSave')}
    onFilterClear={action('onFilterClear')}
  >
    <TableMultiSelectFilter {...props} />
  </TableFilterGroupProvider>
);
