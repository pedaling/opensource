/* eslint-disable @typescript-eslint/naming-convention */
import { Children, isValidElement, useState } from 'react';
import { Box, Image, ScrollBox } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { GhostButton } from '../GhostButton';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { VStack } from '../VStack';
import { TableDataCell } from './TableDataCell';
import { TableHeaderCell } from './TableHeaderCell';
import type { TableColumnProps, TableProps, UseTableResult } from './TableProps';
import { TableRow } from './TableRow';
import type { SortDirection } from './TableSortButton';

const getCellKey = (key: any, rowIndex: number) => `${key}:${rowIndex}`;

export const useTable = <Data extends Record<string, any>>(): UseTableResult<Data> => ({
  Table,
});

export const Table = <DataType extends Record<string, any>>({
  data,
  rowKey,
  selectable,
  selectButtons,
  renderExpanded,
  onRow,
  onSort,
  emptyText,
  emptyImage,
  children,
  disabledRowKey,
}: TableProps<DataType>) => {
  const columns =
    (Children.toArray(children).filter(child => isValidElement(child)) as unknown as typeof children).map(
      ({ props, key }) => ({ ...props, key: key as string })
    ) ?? [];
  const [selectedRowKeys, setSelectedRowKeys] = useState(new Set<string>());
  const isCellClickEnabled = columns?.some(column => isDefined(column.onCell));
  const [selectedCellKey, setSelectedCellKey] = useState<string>();

  const handleToggleCheckbox = (key: string) => {
    const newSelectedRowKeys = new Set(selectedRowKeys);

    if (newSelectedRowKeys.has(key)) {
      newSelectedRowKeys.delete(key);
    } else {
      newSelectedRowKeys.add(key);
    }

    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleToggleAllCheckbox = ({ value }: { value: boolean }) => {
    if (value) {
      const allRowKeys = new Set<string>(data.filter(row => disabledRowKey !== row[rowKey]).map(row => row[rowKey]));

      setSelectedRowKeys(allRowKeys);
    } else {
      setSelectedRowKeys(new Set());
    }
  };

  return (
    <ScrollBox
      horizontal={true}
      borderColor="outline1"
      borderWidth={1}
      borderStyle="solid"
      width="100%"
      borderBottomWidth={0}
    >
      <Box as="table" flexDirection="column" alignItems="flex-start" width="100%" overflowWrap="break-word">
        <TableRow
          header={true}
          selectable={selectable}
          selected={selectedRowKeys.size !== 0}
          expanded={data.length === 0}
          renderExpanded={() => (
            <Box borderTopColor="outline1" borderTopWidth={1} borderTopStyle="solid">
              <VStack mx="auto" alignHorizontal="center" mt={32} mb={64}>
                {isDefined(emptyImage) && <Image src={emptyImage} alt="" width={124} height={124} />}
                <Body level={1}>{emptyText}</Body>
              </VStack>
            </Box>
          )}
          indeterminate={selectedRowKeys.size !== data.length}
          onSelectionChange={handleToggleAllCheckbox}
          bottomBordered={true}
        >
          {isDefined(renderExpanded) && (
            <TableHeaderCell
              renderCell={() => <Box width={16} height={16} />}
              minWidth={0}
              flexShrink={0}
              flexBasis="auto"
            />
          )}
          {columns.map(
            ({
              key,
              dataKey,
              alignVerticalHeader,
              alignHorizontalHeader,
              renderHeader,
              ...column
            }: TableColumnProps<DataType>) => (
              <TableHeaderCell
                key={key}
                {...column}
                alignVertical={alignVerticalHeader}
                alignHorizontal={alignHorizontalHeader}
                renderCell={renderHeader}
                onSort={(sortDirection: SortDirection) => onSort?.((dataKey ?? key) as string, sortDirection)}
              />
            )
          )}
          {selectable && selectedRowKeys.size > 0 && (
            <Paper position="absolute" top={0} bottom={1} right={0} left={52} backgroundColor="background">
              <HStack alignVertical="center" height="100%" py={12} px={16} spacing={12}>
                {selectButtons?.map(({ text, onClick }) => (
                  <GhostButton
                    key={text}
                    size="md"
                    color="onViewInformative"
                    onClick={() => onClick(data.filter(row => selectedRowKeys.has(row[rowKey])))}
                  >
                    {text}
                  </GhostButton>
                ))}
              </HStack>
            </Paper>
          )}
        </TableRow>
        {data.map((row, index) => (
          <TableRow
            key={row[rowKey]}
            selectable={selectable}
            selected={selectedRowKeys.has(row[rowKey])}
            onSelectionChange={() => handleToggleCheckbox(row[rowKey])}
            expandable={isDefined(renderExpanded)}
            renderExpanded={() => renderExpanded?.(row)}
            bottomBordered={true}
            disabled={disabledRowKey === row[rowKey]}
          >
            {columns.map(
              ({
                key,
                dataKey,
                alignVerticalCell,
                alignHorizontalCell,
                onCell,
                formatData,
                renderCell,
                selectable,
                ...column
              }: TableColumnProps<DataType>) => (
                <TableDataCell
                  key={key}
                  onClick={
                    isCellClickEnabled
                      ? onCell
                        ? () => {
                            onCell.onClick?.(row);

                            setSelectedCellKey(getCellKey(key, index));
                          }
                        : undefined
                      : onRow
                      ? () => onRow.onClick?.(row)
                      : undefined
                  }
                  onCopy={() => onCell?.onCopy?.(row)}
                  alignHorizontal={alignHorizontalCell}
                  alignVertical={alignVerticalCell}
                  disabled={disabledRowKey === row[rowKey]}
                  selected={selectedCellKey === getCellKey(key, index)}
                  renderCell={renderCell ? () => renderCell?.(row) : undefined}
                  {...column}
                >
                  {isDefined(formatData) ? formatData(row) : row[dataKey ?? key]}
                </TableDataCell>
              )
            )}
          </TableRow>
        ))}
      </Box>
    </ScrollBox>
  );
};

export const TableColumn = <Data extends Record<string, any>>(_: TableColumnProps<Data>) => null;

Table.displayName = 'Table';

Table.Column = TableColumn;

TableColumn.displayName = 'TableColumn';
