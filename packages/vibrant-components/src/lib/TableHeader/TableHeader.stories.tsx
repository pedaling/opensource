import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableDateFilter, TableFilterGroup, TableMultiSelectFilter, TableStringFilter } from '../TableFilterGroup';
import { TableSearch } from '../TableSearch/TableSearch';
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
    <TableFilterGroup initialFilterDataKeys={[]}>
      <TableStringFilter
        dataKey="id"
        label="ID"
        defaultValue={{
          value: 'loulee',
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
      <TableStringFilter dataKey="class" label="수강 중인 클래스" />
    </TableFilterGroup>
  </VStack>
);

export const withSearch: ComponentStory<typeof TableHeader> = props => (
  <VStack width="100%" spacing={16}>
    <TableHeader {...props}>
      <TableSearch>
        <TableSearch.Option
          options={[
            { label: 'id', value: 'id' },
            { label: 'title', value: 'title' },
            { label: 'content', value: 'content' },
            { label: 'author', value: 'author' },
            { label: 'createdAt', value: 'createdAt' },
          ]}
        />
        <TableSearch.Field />
      </TableSearch>
      <TableHeader.Button kind="tertiary">다운로드</TableHeader.Button>
      <TableHeader.Button kind="tertiary">새로고침</TableHeader.Button>
      <TableHeader.Button kind="primary">추가</TableHeader.Button>
    </TableHeader>
  </VStack>
);
