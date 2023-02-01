import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroup } from '../TableFilterGroup';
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

export const Basic: ComponentStory<typeof TableStringFilter> = props => (
  <TableFilterGroup initialFilterDataKeys={['id']}>
    <TableStringFilter {...props} />
  </TableFilterGroup>
);

export const DefaultFilter: ComponentStory<typeof TableStringFilter> = props => (
  <TableFilterGroup initialFilterDataKeys={['id']}>
    <TableStringFilter {...props} />
  </TableFilterGroup>
);
