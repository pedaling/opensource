import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableSortIcon } from './TableSortIcon';

export default {
  title: 'TableSortIcon',
  component: TableSortIcon,
  args: {
    sortDirection: 'none',
  },
} as ComponentMeta<typeof TableSortIcon>;

export const Basic: ComponentStory<typeof TableSortIcon> = props => <TableSortIcon {...props} />;
