import { action } from '@storybook/addon-actions';
import type { ComponentStory } from '@storybook/react';
import { Box } from '@vibrant-ui/core';
import { Callout } from '../Callout';
import { OutlinedButton } from '../OutlinedButton';
import { Table } from './Table';

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
      { text: 'Edit', onClick: action('onSelectButtonClick') },
      { text: 'Move', onClick: action('onSelectButtonClick') },
    ],
    renderExpanded: ({ name, calories }: Data) => <Callout title={name} contents={`${name} has ${calories}kcal`} />,
    onRow: {
      onClick: action('onRow'),
    },
    disabledRowKeys: ['Cupcake'],
    emptyImage: 'https://cdn.class101.net/images/a097865b-683e-4386-a6a3-1fa27d1463d0',
    emptyText: 'No Data',
  },
};

export const Basic: ComponentStory<typeof Table> = props => (
  <Box p={20} width="100%">
    <Table {...props} selectable={false} renderExpanded={undefined}>
      <Table.Column<Data>
        key="name"
        dataKey="name"
        renderHeader={() => <OutlinedButton size="sm">이름 수정</OutlinedButton>}
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
      {['Edit', 'Delete'].map(value => (
        <Table.Column<Data>
          key={value}
          title=""
          renderDataCell={() => <OutlinedButton size="sm">{value}</OutlinedButton>}
        />
      ))}
    </Table>
  </Box>
);

export const RowSelectable: ComponentStory<typeof Table> = props => (
  <Box p={20} width="100%">
    <Table expandedRowKeys={['Eclair']} {...props}>
      <Table.Column<Data>
        key="name"
        dataKey="name"
        renderHeader={() => <OutlinedButton size="sm">이름 수정</OutlinedButton>}
      />
      <Table.Column<Data>
        key="calories"
        dataKey="calories"
        title="calories"
        sortable={true}
        defaultSortDirection="asc"
        formatData={({ calories }) => `${calories} kcal`}
      />
      <Table.Column<Data> key="fat" dataKey="fat" title="fat" description="abc" />
      <Table.Column<Data> key="carbs" dataKey="carbs" title="carbs" />
      <Table.Column<Data> key="protein" dataKey="protein" title="protein" />
      <Table.Column<Data>
        key="Edit"
        title=""
        width={120}
        renderDataCell={() => <OutlinedButton size="sm">삭제</OutlinedButton>}
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
        selectable={true}
        onDataCell={{
          onClick: action('onDateCellClick'),
          onCopy: action('onDataCellCopy'),
        }}
      />
      <Table.Column<Data>
        key="calories"
        dataKey="calories"
        title="calories"
        selectable={true}
        onDataCell={{
          onClick: action('onDateCellClick'),
          onCopy: action('onDataCellCopy'),
        }}
      />
      <Table.Column<Data> key="fat" dataKey="fat" title="fat" description="abc" />
      <Table.Column<Data>
        key="carbs"
        dataKey="carbs"
        title="carbs"
        selectable={true}
        onDataCell={{
          onClick: action('onDateCellClick'),
          onCopy: action('onDataCellCopy'),
        }}
      />
      <Table.Column<Data>
        key="protein"
        dataKey="protein"
        title="protein"
        selectable={true}
        onDataCell={{
          onClick: action('onDateCellClick'),
          onCopy: action('onDataCellCopy'),
        }}
      />
      <Table.Column<Data>
        key="Edit"
        title=""
        width={120}
        renderDataCell={() => <OutlinedButton size="sm">삭제</OutlinedButton>}
      />
    </Table>
  </Box>
);

export const Empty: ComponentStory<typeof Table> = ({ emptyImage, emptyText }) => (
  <Box p={20} width="100%">
    <Table rowKey="name" data={[]} emptyText={emptyText} emptyImage={emptyImage}>
      <Table.Column key="name" dataKey="name" title="name" />
      <Table.Column key="calories" dataKey="calories" title="calories" />
      <Table.Column key="fat" dataKey="fat" title="fat" />
      <Table.Column key="carbs" dataKey="carbs" title="carbs" />
      <Table.Column key="protein" dataKey="protein" title="protein" />
    </Table>
  </Box>
);
