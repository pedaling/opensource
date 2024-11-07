import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@vibrant-ui/utils/storybook';
import { TableFilterGroup } from './TableFilterGroup';

export default {
  title: 'TableFilterGroup',
  component: TableFilterGroup,
  args: {
    onFilterChange: action('onFilterChange'),
    initialFilterDataKeys: ['id', 'orderStatus'],
  },
} as ComponentMeta<typeof TableFilterGroup>;

export const Basic: ComponentStory<typeof TableFilterGroup> = props => (
  <TableFilterGroup {...props}>
    <TableFilterGroup.StringFilter
      dataKey="id"
      label="ID"
      defaultValue={{
        value: 'loulee',
        operator: 'equals',
      }}
    />
    <TableFilterGroup.StringFilter
      dataKey="location"
      label="장소"
      defaultValue={{
        value: 'Seoul',
        operator: 'contains',
      }}
    />
    <TableFilterGroup.DateFilter dataKey="period" label="수강 기간" />
    <TableFilterGroup.MultiSelectFilter
      dataKey="orderStatus"
      label="주문 상태"
      defaultValue={{ operator: 'contains', value: ['completed'] }}
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
    <TableFilterGroup.StringFilter dataKey="class" label="수강 중인 클래스" />
    <TableFilterGroup.RadioFilter
      dataKey="hidden"
      label="숨김 여부"
      operators={['equals']}
      options={[
        {
          value: 'true',
          label: '숨김',
        },
        {
          value: 'false',
          label: '숨기지 않음',
        },
      ]}
    />
  </TableFilterGroup>
);
