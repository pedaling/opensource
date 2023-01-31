import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroup } from '../TableFilterGroup';
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

export const Basic: ComponentStory<typeof TableMultiSelectFilter> = props => (
  <TableFilterGroup initialFilterDataKeys={['status']}>
    <TableMultiSelectFilter {...props} />
  </TableFilterGroup>
);

export const DefaultFilter: ComponentStory<typeof TableMultiSelectFilter> = props => (
  <TableFilterGroup initialFilterDataKeys={['status']}>
    <TableMultiSelectFilter {...props} />
  </TableFilterGroup>
);
