import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableDateFilter } from './TableDateFilter';
import { TableFilterGroup } from './TableFilterGroup';
import { TableMultiSelectFilter } from './TableMultiSelectFilter';
import { TableStringFilter } from './TableStringFilter';

export default {
  title: 'TableFilterGroup',
  component: TableFilterGroup,
  args: {
    initialFilterDataKeys: ['id', 'orderStatus'],
    onFilterChange: filters => {
      filters.map(filter =>
        console.log(`dataKey: ${filter.dataKey} / value: ${filter.value} / operator: ${filter.operator}`)
      );
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
      label="장소"
      defaultValue={{
        value: 'Seoul',
        operator: 'contains',
      }}
    />
    <TableDateFilter dataKey="period" label="수강 기간" />
    <TableMultiSelectFilter
      dataKey="orderStatus"
      label="주문 상태"
      options={[
        {
          value: 'completed',
          label: '주문 완료',
        },
        {
          value: 'canceled',
          label: '취소처리',
        },
        {
          value: 'packaged',
          label: '배송 준비중',
        },
      ]}
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
