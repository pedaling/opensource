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
  {
    title: 'titletitletitletitletitletitletitletitletitletitletitletitletitle',
    id: '1',
    createdAt: new Date(2022, 11, 20),
  },
  { title: '제목2', id: '2', createdAt: new Date(2022, 11, 21) },
  { title: '제목3', id: '3', createdAt: new Date(2022, 11, 22) },
];

export default {
  title: 'TableColumn',
  component: TableColumn,
  args: {
    alignHorizontal: {
      header: 'center',
      dataCell: 'center',
    },
    alignVertical: {
      header: 'center',
      dataCell: 'center',
    },
    overflowWrap: {
      header: 'break-word',
      dataCell: 'break-word',
    },
    lineLimit: {
      dataCell: 2,
    },
    whiteSpace: {
      header: 'normal',
      dataCell: 'normal',
    },
    wordBreak: {
      header: 'normal',
      dataCell: 'normal',
    },
  },
};

export const Basic: ComponentStory<typeof TableColumn> = ({
  renderHeader: _renderHeader,
  renderDataCell: _renderDataCell,
  dataKey: _dataKey,
  ...props
}) => (
  <Box p={20} width="100%">
    <Table data={rows} rowKey="id" tableLayout="fixed">
      <TableColumn<Data> {...props} key="title" title="Antidisestablishmentarianism" dataKey="title" />
      <TableColumn<Data> {...props} key="id" title="ID" dataKey="id" />
      <TableColumn<Data>
        {...props}
        key="createdAt"
        title="작성일"
        dataKey="createdAt"
        formatData={({ createdAt }) => createdAt.toLocaleDateString('en-US')}
      />
      <TableColumn<Data>
        key="Edit"
        title=""
        formatData={({ createdAt }) => createdAt.toLocaleDateString('en-US')}
        renderDataCell={() => (
          <HStack alignVertical="center" spacing={10}>
            <OutlinedButton size="sm">수정</OutlinedButton>
            <OutlinedButton size="sm">삭제</OutlinedButton>
          </HStack>
        )}
      />
    </Table>
  </Box>
);
