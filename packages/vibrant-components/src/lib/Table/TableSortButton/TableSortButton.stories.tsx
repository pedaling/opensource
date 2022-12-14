import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableSortButton } from './TableSortButton';

export default {
  title: 'TableSortButton',
  component: TableSortButton,
  args: {
    sortDirection: 'none',
  },
} as ComponentMeta<typeof TableSortButton>;

export const Basic: ComponentStory<typeof TableSortButton> = props => <TableSortButton {...props} />;
