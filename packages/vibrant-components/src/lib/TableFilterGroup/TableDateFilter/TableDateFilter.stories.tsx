import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroup } from '../TableFilterGroup';
import { TableDateFilter } from './TableDateFilter';

export default {
  title: 'TableDateFilter',
  component: TableDateFilter,
  args: {
    dataKey: 'createdAt',
    label: '생성일',
  },
} as ComponentMeta<typeof TableDateFilter>;

export const Basic: ComponentStory<typeof TableDateFilter> = props => (
  <TableFilterGroup initialFilterDataKeys={['createdAt']}>
    <TableDateFilter defaultValue={undefined} {...props} />
  </TableFilterGroup>
);

export const DefaultFilter: ComponentStory<typeof TableDateFilter> = props => (
  <TableFilterGroup initialFilterDataKeys={['createdAt']}>
    <TableDateFilter {...props} />
  </TableFilterGroup>
);
