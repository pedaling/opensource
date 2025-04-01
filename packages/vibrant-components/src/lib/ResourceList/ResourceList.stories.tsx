import { action } from '@storybook/addon-actions';
import type { ComponentStory } from '@storybook/react';
import { Avatar } from '../Avatar';
import { ResourceList } from './ResourceList';

export default {
  title: 'ResourceList',
  component: ResourceList,
  parameters: {
    docs: {
      description: {
        component: 'ResourceList is a component used to display a list of resources with selection capabilities.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
      defaultValue: 'lg',
    },
    multiSelect: {
      control: 'boolean',
      defaultValue: false,
    },
    selectedIds: {
      control: 'array',
    },
    onSelect: {
      action: action('onSelect'),
    },
    onChangeSelectedIds: {
      action: action('onChangeSelectedIds'),
    },
  },
};

// Basic ResourceList with single select
export const Default: ComponentStory<typeof ResourceList> = args => (
  <ResourceList {...args}>
    <ResourceList.Item
      id="1"
      title="Resource Item 1"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 1"
    />
    <ResourceList.Item
      id="2"
      title="Resource Item 2"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 2"
    />
    <ResourceList.Item
      id="3"
      title="Resource Item 3"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 3"
    />
    <ResourceList.Item
      id="4"
      title="Resource Item 4"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 4"
    />
  </ResourceList>
);

// ResourceList with multi-select enabled
export const MultiSelect: ComponentStory<typeof ResourceList> = args => (
  <ResourceList {...args} multiSelect={true}>
    <ResourceList.Item
      id="1"
      title="Resource Item 1"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 1"
    />
    <ResourceList.Item
      id="2"
      title="Resource Item 2"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 2"
    />
    <ResourceList.Item
      id="3"
      title="Resource Item 3"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 3"
    />
    <ResourceList.Item
      id="4"
      title="Resource Item 4"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 4"
    />
  </ResourceList>
);

// ResourceList with pre-selected items
export const WithPreselectedItems: ComponentStory<typeof ResourceList> = args => (
  <ResourceList {...args} multiSelect={true} selectedIds={['1', '3']}>
    <ResourceList.Item
      id="1"
      title="Resource Item 1"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 1"
    />
    <ResourceList.Item
      id="2"
      title="Resource Item 2"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 2"
    />
    <ResourceList.Item
      id="3"
      title="Resource Item 3"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 3"
    />
    <ResourceList.Item
      id="4"
      title="Resource Item 4"
      ImageComponent={<Avatar alt="John Doe" size="md" src="https://i.pravatar.cc/150?u=1" />}
      subtitle="Description 4"
    />
  </ResourceList>
);
