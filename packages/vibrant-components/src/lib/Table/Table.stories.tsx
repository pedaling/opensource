/* eslint-disable no-console */
import type { ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Callout } from '../Callout';
import { OutlinedButton } from '../OutlinedButton';
import { Table, useTable } from './Table';

type Data = {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows: Data[] = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default {
  title: 'Table',
  component: Table,
  args: {
    data: rows,
    rowKey: 'name',
    selectable: true,
    selectButtons: [
      { text: 'Edit', onClick: (selectedRows: Data[]) => console.log(selectedRows) },
      { text: 'Move', onClick: (selectedRows: Data[]) => console.log(selectedRows) },
    ],
    renderExpanded: () => (
      <Callout title="Title" contents="My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park." />
    ),
    onRow: {
      onClick: (row: Data) => console.log(row),
    },
    emptyText: 'No Data',
    emptyImage: 'https://cdn.class101.net/images/a097865b-683e-4386-a6a3-1fa27d1463d0',
    disabledRowKey: 'Cupcake',
  },
};

export const Basic: ComponentStory<typeof Table> = props => (
  <Box p={20} width="100%">
    <Table {...props} selectable={false} renderExpanded={undefined}>
      <Table.Column<Data>
        key="name"
        dataKey="name"
        renderHeader={() => <OutlinedButton size="sm">이름 수정</OutlinedButton>}
        textAlign="center"
      />
      <Table.Column<Data> key="calories" dataKey="calories" title="calories" />
      <Table.Column<Data>
        key="fat"
        dataKey="fat"
        title="fat"
        description="abc"
        sortable={true}
        defaultSortDirection="asc"
        formatData={({ fat }) => `${fat} kcal`}
      />
      <Table.Column<Data> key="carbs" dataKey="carbs" title="carbs" />
      <Table.Column<Data> key="protein" dataKey="protein" title="protein" />
      <Table.Column<Data>
        key="Edit"
        title=""
        width={120}
        renderCell={() => <OutlinedButton size="sm">수정</OutlinedButton>}
      />
    </Table>
  </Box>
);

export const RowSelectable: ComponentStory<typeof Table> = props => (
  <Box p={20} width="100%">
    <Table {...props}>
      <Table.Column<Data>
        key="name"
        dataKey="name"
        renderHeader={() => <OutlinedButton size="sm">이름 수정</OutlinedButton>}
        textAlign="center"
      />
      <Table.Column<Data> key="calories" dataKey="calories" title="calories" />
      <Table.Column<Data>
        key="fat"
        dataKey="fat"
        title="fat"
        description="abc"
        sortable={true}
        defaultSortDirection="asc"
        formatData={({ fat }) => `${fat} kcal`}
      />
      <Table.Column<Data> key="carbs" dataKey="carbs" title="carbs" />
      <Table.Column<Data> key="protein" dataKey="protein" title="protein" />
      <Table.Column<Data>
        key="Edit"
        title=""
        width={120}
        renderCell={() => <OutlinedButton size="sm">수정</OutlinedButton>}
      />
    </Table>
  </Box>
);

export const cellSelectable: ComponentStory<typeof Table> = props => (
  <Box p={20} width="100%">
    <Table {...props} selectable={false}>
      <Table.Column<Data>
        key="name"
        dataKey="name"
        renderHeader={() => <OutlinedButton size="sm">이름 수정</OutlinedButton>}
        textAlign="center"
        selectable={true}
        onCell={{
          onClick: row => console.log('clicked', row),
          onCopy: row => console.log(row),
        }}
      />
      <Table.Column<Data>
        key="calories"
        dataKey="calories"
        title="calories"
        selectable={true}
        onCell={{
          onClick: row => console.log('clicked', row),
          onCopy: row => console.log('copied', row),
        }}
      />
      <Table.Column<Data>
        key="fat"
        dataKey="fat"
        title="fat"
        description="abc"
        sortable={true}
        defaultSortDirection="asc"
        formatData={({ fat }) => `${fat} kcal`}
        selectable={true}
        onCell={{
          onClick: row => console.log('clicked', row),
          onCopy: row => console.log('copied', row),
        }}
      />
      <Table.Column<Data>
        key="carbs"
        dataKey="carbs"
        title="carbs"
        selectable={true}
        onCell={{
          onClick: row => console.log('clicked', row),
          onCopy: row => console.log('copied', row),
        }}
      />
      <Table.Column<Data>
        key="protein"
        dataKey="protein"
        title="protein"
        selectable={true}
        onCell={{
          onClick: row => console.log('clicked', row),
          onCopy: row => console.log('copied', row),
        }}
      />
      <Table.Column<Data>
        key="Edit"
        title=""
        width={120}
        renderCell={() => <OutlinedButton size="sm">수정</OutlinedButton>}
      />
    </Table>
  </Box>
);

export const UseTable: ComponentStory<typeof Table> = () => {
  const { Table: TableComponent } = useTable<Data>();

  return (
    <Box p={20} width="100%">
      <TableComponent data={rows} rowKey="name">
        <TableComponent.Column
          key="name"
          dataKey="name"
          renderHeader={() => <OutlinedButton size="sm">이름 수정</OutlinedButton>}
        />
        <TableComponent.Column key="calories" dataKey="calories" title="calories" />
        <TableComponent.Column
          key="fat"
          dataKey="fat"
          title="fat"
          description="abc"
          sortable={true}
          defaultSortDirection="asc"
          formatData={({ fat }) => `${fat} kcal`}
        />
        <TableComponent.Column key="carbs" dataKey="carbs" title="carbs" />
        <TableComponent.Column key="protein" dataKey="protein" title="protein" />
      </TableComponent>
    </Box>
  );
};
