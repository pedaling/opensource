import type { ComponentProps, FC } from 'react';
import type { ComponentStory } from '@storybook/react';
import { Callout, OutlinedButton, Table, tableTranslation } from '@vibrant-ui/components';
import { Box, ConfigProvider } from '@vibrant-ui/core';
import { action } from '@vibrant-ui/utils/storybook';
import { VirtualizedTable } from './VirtualizedTable';

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
  createData('Chocolate cake', 420, 12.0, 52, 7.2),
  createData('Apple pie', 277, 10.0, 32, 3.8),
  createData('Pumpkin pie', 322, 8.5, 42, 5.0),
  createData('Blueberry muffin', 195, 5.0, 27, 2.5),
  createData('Strawberry shortcake', 180, 4.5, 32, 2.0),
  createData('Sugar cookie', 140, 2.0, 23, 1.5),
  createData('Brownie', 280, 8.0, 40, 4.5),
  createData('Fruit tart', 210, 5.5, 34, 3.5),
  createData('Lemon bar', 180, 4.0, 28, 2.0),
  createData('Cheesecake', 320, 10.0, 42, 6.0),
  createData('Macaron', 90, 2.5, 12, 0.5),
  createData('Cannoli', 250, 9.0, 34, 4.5),
  createData('Baklava', 220, 6.0, 26, 3.5),
  createData('Pecan pie', 420, 14.0, 48, 8.0),
];

export default {
  title: 'VirtualizedTable',
  component: VirtualizedTable,
  argTypes: {
    locale: {
      type: {
        name: 'enum',
        value: ['ko', 'en', 'ja'],
      },
      defaultValue: 'ko',
    },
  },
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
    loading: false,
  },
};

export const Basic: ComponentStory<typeof VirtualizedTable> = props => (
  <Box p={20} width="100%">
    <VirtualizedTable {...props} selectable={false} renderExpanded={undefined}>
      <Table.Column<Data>
        key="name"
        dataKey="name"
        width={200}
        renderHeader={() => <OutlinedButton size="sm">이름 수정</OutlinedButton>}
      />
      <Table.Column<Data> key="calories" dataKey="calories" title="calories" width={120} />
      <Table.Column<Data>
        key="fat"
        dataKey="fat"
        title="fat"
        description="abc"
        sortable={true}
        defaultSortDirection="asc"
        width={120}
        formatData={({ fat }) => `${fat} kcal`}
      />
      <Table.Column<Data> key="carbs" dataKey="carbs" title="carbs" width={120} />
      <Table.Column<Data> key="protein" dataKey="protein" title="protein" width={120} />
      {['Edit', 'Delete'].map(value => (
        <Table.Column<Data>
          key={value}
          title=""
          renderDataCell={() => <OutlinedButton size="sm">{value}</OutlinedButton>}
          width={120}
        />
      ))}
    </VirtualizedTable>
  </Box>
);

export const RowSelectable: FC<ComponentProps<typeof VirtualizedTable> & { locale?: 'en' | 'ja' | 'ko' }> = ({
  locale = 'ko',
  ...props
}) => (
  <Box p={20} width="100%">
    <ConfigProvider translations={{ table: tableTranslation[locale] }}>
      <VirtualizedTable expandedRowKeys={['Eclair']} {...props}>
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
      </VirtualizedTable>
    </ConfigProvider>
  </Box>
);

export const cellSelectable: ComponentStory<typeof VirtualizedTable> = props => (
  <Box p={20} width="100%">
    <VirtualizedTable {...props} selectable={false} tableLayout="fixed">
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
    </VirtualizedTable>
  </Box>
);

export const Empty: ComponentStory<typeof VirtualizedTable> = ({ emptyImage, emptyText }) => (
  <Box p={20} width="100%">
    <VirtualizedTable rowKey="name" data={[]} emptyText={emptyText} emptyImage={emptyImage}>
      <Table.Column key="name" dataKey="name" title="name" />
      <Table.Column key="calories" dataKey="calories" title="calories" />
      <Table.Column key="fat" dataKey="fat" title="fat" />
      <Table.Column key="carbs" dataKey="carbs" title="carbs" />
      <Table.Column key="protein" dataKey="protein" title="protein" />
    </VirtualizedTable>
  </Box>
);
