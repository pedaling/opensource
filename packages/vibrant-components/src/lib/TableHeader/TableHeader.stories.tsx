import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableFilterGroup } from '../TableFilterGroup';
import { VStack } from '../VStack';
import { TableHeader } from './TableHeader';

export default {
  title: 'TableHeader',
  component: TableHeader,
  args: {},
} as ComponentMeta<typeof TableHeader>;

export const Basic: ComponentStory<typeof TableHeader> = props => (
  <TableHeader {...props}>
    <TableHeader.Button kind="tertiary">다운로드</TableHeader.Button>
    <TableHeader.Button kind="tertiary">새로고침</TableHeader.Button>
    <TableHeader.Button kind="primary">추가</TableHeader.Button>
  </TableHeader>
);

export const withFilterGroup: ComponentStory<typeof TableHeader> = props => (
  <VStack width="100%" spacing={16}>
    <TableHeader {...props}>
      <TableHeader.Button kind="tertiary">다운로드</TableHeader.Button>
      <TableHeader.Button kind="tertiary">새로고침</TableHeader.Button>
      <TableHeader.Button kind="primary">추가</TableHeader.Button>
    </TableHeader>
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
        defaultValue={{ operator: 'equals', value: ['completed'] }}
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
    </TableFilterGroup>
  </VStack>
);
