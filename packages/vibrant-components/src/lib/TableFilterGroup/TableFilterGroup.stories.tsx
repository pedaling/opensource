import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableDateFilter } from './TableDateFilter';
import { TableFilterGroup } from './TableFilterGroup';
import { TableStringFilter } from './TableStringFilter';

export default {
  title: 'TableFilterGroup',
  component: TableFilterGroup,
  args: {
    onFilterChange: action('onFilterChange'),
    initialFilterDataKeys: ['id'],
  },
} as ComponentMeta<typeof TableFilterGroup>;

export const Basic: ComponentStory<typeof TableFilterGroup> = props => (
  <TableFilterGroup {...props}>
    <TableStringFilter
      dataKey="id"
      label="ID"
      defaultValue={{
        value: 'loulee',
        operator: 'equals',
      }}
    />
    {/* <TableMultiSelectFilter
      dataKey="test"
      label="의문 상태"
      options={[
        {
          value: '1',
          label: '주문',
        },
        {
          value: 'caed',
          label: '좋아',
        },
        {
          value: 'pakaged',
          label: '배 준비중',
        },
      ]}
    /> */}
    <TableStringFilter
      dataKey="location"
      label="장소"
      defaultValue={{
        value: 'Seoul',
        operator: 'contains',
      }}
    />
    <TableDateFilter dataKey="period" label="수강 기간" />
    {/* <TableMultiSelectFilter
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
    /> */}
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
