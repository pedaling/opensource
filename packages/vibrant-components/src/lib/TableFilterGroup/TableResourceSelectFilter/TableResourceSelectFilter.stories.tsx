import { action } from '@storybook/addon-actions';
import type { ComponentStory } from '@storybook/react';
import { Avatar } from '../../../lib/Avatar';
import { ResourceList } from '../../ResourceList';
import { TableFilterGroup } from '../TableFilterGroup';
import { TableResourceSelectFilter } from './TableResourceSelectFilter';

export default {
  title: 'TableFilterGroup/TableResourceSelectFilter',
  component: TableResourceSelectFilter,
  parameters: {
    docs: {
      description: {
        component: 'TableResourceSelectFilter is a component used in table filters to select resources from a list.',
      },
    },
  },
  argTypes: {
    dataKey: {
      control: 'text',
      defaultValue: 'resource',
    },
    label: {
      control: 'text',
      defaultValue: 'Resource Filter',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Select resources',
    },
    operators: {
      control: 'array',
      defaultValue: ['contains', 'notContains'],
    },
    defaultValue: {
      control: 'object',
    },
    testId: {
      control: 'text',
    },
  },
};

// Basic TableResourceSelectFilter with default settings
export const Default: ComponentStory<typeof TableResourceSelectFilter> = args => (
  <TableFilterGroup initialFilterDataKeys={['resource']} onFilterChange={action('filterChange')}>
    <TableFilterGroup.ResourceSelectFilter {...args} dataKey="userId" label="Resource Filter" size="lg">
      <ResourceList.Item
        id="1"
        title="Resource Item 1"
        ImageComponent={<Avatar alt="User 1" size="md" src="https://i.pravatar.cc/150?u=1" />}
        subtitle="Description 1"
      />
      <ResourceList.Item
        id="2"
        title="Resource Item 2"
        ImageComponent={<Avatar alt="User 2" size="md" src="https://i.pravatar.cc/150?u=2" />}
        subtitle="Description 2"
      />
      <ResourceList.Item
        id="3"
        title="Resource Item 3"
        ImageComponent={<Avatar alt="User 3" size="md" src="https://i.pravatar.cc/150?u=3" />}
        subtitle="Description 3"
      />
    </TableFilterGroup.ResourceSelectFilter>
  </TableFilterGroup>
);

// TableResourceSelectFilter with custom operators
export const CustomOperators: ComponentStory<typeof TableResourceSelectFilter> = args => (
  <TableFilterGroup initialFilterDataKeys={['userId']} onFilterChange={action('filterChange')}>
    <TableFilterGroup.ResourceSelectFilter
      {...args}
      dataKey="userId"
      label="Resource Filter"
      operators={['contains']}
      defaultValue={{
        value: ['1'],
        operator: 'contains',
      }}
      size="sm"
    >
      <ResourceList.Item
        id="1"
        title="Resource Item 1"
        ImageComponent={<Avatar alt="User 1" size="md" src="https://i.pravatar.cc/150?u=1" />}
        subtitle="Description 1"
      />
      <ResourceList.Item
        id="2"
        title="Resource Item 2"
        ImageComponent={<Avatar alt="User 2" size="md" src="https://i.pravatar.cc/150?u=2" />}
        subtitle="Description 2"
      />
      <ResourceList.Item
        id="3"
        title="Resource Item 3"
        ImageComponent={<Avatar alt="User 3" size="md" src="https://i.pravatar.cc/150?u=3" />}
        subtitle="Description 3"
      />
    </TableFilterGroup.ResourceSelectFilter>
  </TableFilterGroup>
);

// TableResourceSelectFilter with pre-selected values
export const WithPreselectedValues: ComponentStory<typeof TableResourceSelectFilter> = args => (
  <TableFilterGroup initialFilterDataKeys={['resource']} onFilterChange={action('filterChange')}>
    <TableFilterGroup.ResourceSelectFilter
      {...args}
      dataKey="userId"
      label="Resource Filter"
      defaultValue={{
        value: ['1', '3'],
        operator: 'contains',
      }}
      size="md"
    >
      <ResourceList.Item
        id="1"
        title="Resource Item 1"
        ImageComponent={<Avatar alt="User 1" size="md" src="https://i.pravatar.cc/150?u=1" />}
        subtitle="Description 1"
      />
      <ResourceList.Item
        id="2"
        title="Resource Item 2"
        ImageComponent={<Avatar alt="User 2" size="md" src="https://i.pravatar.cc/150?u=2" />}
        subtitle="Description 2"
      />
      <ResourceList.Item
        id="3"
        title="Resource Item 3"
        ImageComponent={<Avatar alt="User 3" size="md" src="https://i.pravatar.cc/150?u=3" />}
        subtitle="Description 3"
      />
      <ResourceList.Item
        id="4"
        title="Resource Item 4"
        ImageComponent={<Avatar alt="User 4" size="md" src="https://i.pravatar.cc/150?u=4" />}
        subtitle="Description 4"
      />
    </TableFilterGroup.ResourceSelectFilter>
  </TableFilterGroup>
);
