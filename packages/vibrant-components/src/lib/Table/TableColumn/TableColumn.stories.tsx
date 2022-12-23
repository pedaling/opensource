import type { ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { HStack } from '../../HStack';
import { OutlinedButton } from '../../OutlinedButton';
import { Table } from '../Table';
import { TableColumn } from './TableColumn';

type Data = {
  title: string;
  id: string;
  createdAt: Date;
};

const rows: Data[] = [
  { title: '제목1', id: '1', createdAt: new Date(2022, 11, 20) },
  { title: '제목2', id: '2', createdAt: new Date(2022, 11, 21) },
  { title: '제목3', id: '3', createdAt: new Date(2022, 11, 22) },
];

export default {
  title: 'TableColumn',
  component: TableColumn,
  args: {},
};

export const Basic: ComponentStory<typeof TableColumn> = ({
  renderHeader: _renderHeader,
  renderCell: _renderCell,
  dataKey: _dataKey,
  ...props
}) => (
  <Box p={20} width="100%">
    <Table data={rows} rowKey="id">
      <TableColumn<Data> {...props} key="title" title="제목" dataKey="title" />
      <TableColumn<Data> {...props} key="id" title="ID" dataKey="id" />
      <TableColumn<Data>
        {...props}
        key="createdAt"
        title="작성일"
        dataKey="createdAt"
        formatData={({ createdAt }) => createdAt.toLocaleDateString('en-US')}
      />
      <TableColumn<Data>
        {...props}
        key="Edit"
        title=""
        formatData={({ createdAt }) => createdAt.toLocaleDateString('en-US')}
        width={160}
        renderCell={() => (
          <HStack alignVertical="center" spacing={10}>
            <OutlinedButton size="sm">수정</OutlinedButton>
            <OutlinedButton size="sm">삭제</OutlinedButton>
          </HStack>
        )}
      />
    </Table>
  </Box>
);
