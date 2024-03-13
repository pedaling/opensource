/* eslint-disable max-lines */
import type { ComponentProps, FC } from 'react';
import { useRef, useState } from 'react';
import type { ComponentStory } from '@storybook/react';
import { Box, ConfigProvider } from '@vibrant-ui/core';
import { action } from '@vibrant-ui/utils/storybook';
import { Callout } from '../Callout';
import { ContainedButton } from '../ContainedButton';
import { OutlinedButton } from '../OutlinedButton';
import { VStack } from '../VStack';
import { Table } from './Table';
import { tableTranslation } from '.';

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
        sortDirection="asc"
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

export const SelectableTable: FC<ComponentProps<typeof Table> & { locale?: 'en' | 'ja' | 'ko' }> = ({
  locale = 'ko',
  ...props
}) => (
  <Box p={20} width="100%">
    <ConfigProvider translations={{ table: tableTranslation[locale] }}>
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
          sortDirection="asc"
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
    </ConfigProvider>
  </Box>
);

export const SelectableInteractiveTable: FC<ComponentProps<typeof Table> & { locale?: 'en' | 'ja' | 'ko' }> = ({
  locale = 'ko',
  ...props
}) => {
  const [data, setData] = useState(rows);
  const index = useRef<number>(1);

  const addRow = () => {
    setData(prev => [
      ...prev,
      createData(String(index.current), index.current, index.current, index.current, index.current),
    ]);

    index.current += 1;

    index.current %= 3;
  };

  const deleteRow = (data: Data) => () => {
    const corresRowKey = data[props.rowKey];

    setData(prev => prev.filter(row => row[props.rowKey] !== corresRowKey));
  };

  return (
    <VStack>
      <ContainedButton kind="primary" size="md" onClick={addRow}>
        Append Data
      </ContainedButton>
      <Box p={20} width="100%">
        <ConfigProvider translations={{ table: tableTranslation[locale] }}>
          <Table expandedRowKeys={['Eclair']} {...props} data={data}>
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
              sortDirection="asc"
              formatData={({ calories }) => `${calories} kcal`}
            />
            <Table.Column<Data> key="fat" dataKey="fat" title="fat" description="abc" />
            <Table.Column<Data> key="carbs" dataKey="carbs" title="carbs" />
            <Table.Column<Data> key="protein" dataKey="protein" title="protein" />
            <Table.Column<Data>
              key="Edit"
              title=""
              width={120}
              renderDataCell={row => (
                <OutlinedButton onClick={deleteRow(row)} size="sm">
                  삭제
                </OutlinedButton>
              )}
            />
          </Table>
        </ConfigProvider>
      </Box>
    </VStack>
  );
};

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
