import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroup } from './TableFilterGroup';
import { TableStringFilter } from './TableStringFilter';

export default {
  title: 'TableFilterGroup',
  component: TableFilterGroup,
  args: {
    initialFilterDataKeys: ['id'],
  },
} as ComponentMeta<typeof TableFilterGroup>;

export const Basic: ComponentStory<typeof TableStringFilter> = props => (
  <TableFilterGroup initialFilterDataKeys={['id']}>
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
      label="장소"
      defaultValue={{
        value: 'Seoul',
        operator: 'contains',
      }}
    />
    <TableStringFilter
      dataKey="class"
      label="수강 중인 클래스"
      defaultValue={{
        value: 'Something',
        operator: 'equals',
      }}
    />
  </TableFilterGroup>
);
