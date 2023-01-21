import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableStringFilter } from '../TableFilter/TableStringFilter';
import { TableFilterGroup } from './TableFilterGroup';

export default {
  title: 'TableFilterGroup',
  component: TableFilterGroup,
  args: {
    initialFilterDataKeys: ['id'],
    onFilterChange: filters => {
      console.log(filters);
    },
  },
} as ComponentMeta<typeof TableFilterGroup>;

export const Basic: ComponentStory<typeof TableStringFilter> = props => (
  <TableFilterGroup {...props}>
    <TableStringFilter
      dataKey="id"
      label="ID"
      defaultValue={{
        value: '1234',
        operator: 'equals',
      }}
    />
    <TableStringFilter
      dataKey="location"
      label="Location"
      defaultValue={{
        value: 'Seoul',
        operator: 'contains',
      }}
    />
    <TableStringFilter
      dataKey="class"
      label="Class"
      defaultValue={{
        value: 'Something',
        operator: 'equals',
      }}
    />
    {/* <TableDateFilter
      dataKey="birthday"
      label="생년월일"
      defaultValue={{
        value: [],
        operator: 'before',
      }}
    /> */}
  </TableFilterGroup>
);
