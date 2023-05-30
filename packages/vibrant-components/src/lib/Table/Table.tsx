/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElement } from 'react';
import { Children, isValidElement, useState } from 'react';
import { Box, Image, ScrollBox, useConfig } from '@vibrant-ui/core';
import { isDefined, useControllableState } from '@vibrant-ui/utils';
import { Body } from '../Body';
import { GhostButton } from '../GhostButton';
import { HStack } from '../HStack';
import { Paper } from '../Paper';
import { Skeleton } from '../Skeleton';
import { VStack } from '../VStack';
import { TableColumn } from './TableColumn';
import type { TableColumnProps } from './TableColumn/TableColumnProps';
import { TableDataCell } from './TableDataCell';
import { TableHeaderCell } from './TableHeaderCell';
import type { TableProps, UseTableResult } from './TableProps';
import { TableRow } from './TableRow';
import type { SortDirection } from './TableSortIcon';

const getCellKey = (key: any, rowIndex: number) => `${key}:${rowIndex}`;

export const useTable = <Data extends Record<string, any>, RowKey extends keyof Data>(): UseTableResult<
  Data,
  RowKey
> => ({
  Table,
});

export const Table = <Data extends Record<string, any>, RowKey extends keyof Data>({
  data,
  rowKey,
  loading = false,
  selectable = false,
  selectButtons,
  onSelectionChange,
  renderExpanded,
  onRow,
  onSort,
  emptyText,
  emptyImage,
  children,
  disabledRowKeys,
  expandedRowKeys,
  tableLayout,
  testId = 'table',
}: TableProps<Data, RowKey>) => {
  const columns =
    (
      Children.toArray(children).filter(child => isValidElement(child)) as unknown as ReactElement<
        TableColumnProps<Data>
      >[]
    ).map(({ props, key }) => ({ ...props, key: key as string })) ?? [];

  const [selectedRowKeys, setSelectedRowKeys] = useControllableState<Set<Data[RowKey]>>({
    defaultValue: new Set<Data[RowKey]>(),
    onValueChange: (value: Set<Data[RowKey]>) => onSelectionChange?.([...value]),
  });
  const [selectedCellKey, setSelectedCellKey] = useState<string>();
  const isCellClickEnabled = columns?.some(column => isDefined(column.onDataCell));

  const handleToggleCheckbox = (key: Data[RowKey]) => {
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
      const allRowKeys = new Set<Data[RowKey]>(
        data
          .filter(row => (isDefined(disabledRowKeys) ? !disabledRowKeys.includes(row[rowKey]) : true))
          .map(row => row[rowKey])
      );

      setSelectedRowKeys(allRowKeys);
    } else {
      setSelectedRowKeys(new Set());
    }
  };

  const {
    translations: { table: tableTranslation },
  } = useConfig();

  return (
    <ScrollBox
      horizontal={true}
      borderColor="outline1"
      borderWidth={1}
      borderStyle="solid"
      width="100%"
      borderBottomWidth={0}
      borderRadiusLevel={1}
      data-testid={testId}
    >
      <Box
        as="table"
        display="web_table"
        borderCollapse="separate"
        tableLayout={tableLayout}
        width="100%"
        height="100%"
      >
        <Box as="thead" display="web_table-row-group" height="100%">
          <TableRow
            header={true}
            selectable={selectable}
            selected={selectedRowKeys.size !== 0}
            expanded={!loading && data.length === 0}
            renderExpanded={() => (
              <VStack alignHorizontal="center" mt={32} mb={64}>
                {isDefined(emptyImage) && <Image src={emptyImage} alt="" width={124} height={124} />}
                <Body level={1}>{emptyText}</Body>
              </VStack>
            )}
            overlaid={selectable && selectedRowKeys.size > 0}
            renderOverlay={() => (
              <HStack alignVertical="center" height="100%" spacing={12}>
                {selectedRowKeys.size > 0 ? (
                  <Body level={2} weight="medium">
                    {tableTranslation.numberOfSelected.replace('{count}', selectedRowKeys.size.toString())}
                  </Body>
                ) : null}
                <HStack alignVertical="center" height="100%" spacing={12}>
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
              </HStack>
            )}
            indeterminate={selectedRowKeys.size !== data.length}
            onSelectionChange={handleToggleAllCheckbox}
            disabled={loading}
          >
            {isDefined(renderExpanded) && (
              <TableHeaderCell renderCell={() => <Box width={16} height={16} />} width={48} />
            )}
            {!loading
              ? columns.map(
                  ({
                    key,
                    dataKey,
                    alignHorizontal,
                    alignVertical,
                    renderHeader,
                    lineLimit,
                    wordBreak,
                    whiteSpace,
                    overflowWrap,
                    ...column
                  }: TableColumnProps<Data>) => (
                    <TableHeaderCell
                      key={key}
                      {...column}
                      alignVertical={alignVertical?.header}
                      alignHorizontal={alignHorizontal?.header}
                      lineLimit={lineLimit?.header}
                      wordBreak={wordBreak?.header}
                      whiteSpace={whiteSpace?.header}
                      overflowWrap={overflowWrap?.header}
                      renderCell={renderHeader}
                      onSort={(sortDirection: SortDirection) => onSort?.({ dataKey, direction: sortDirection })}
                    />
                  )
                )
              : Array.from({ length: 4 }, (_, columnIndex) => (
                  <TableDataCell
                    key={columnIndex}
                    disabled={true}
                    alignHorizontal="start"
                    renderCell={() => <Skeleton width={80} height={18} />}
                  />
                ))}
          </TableRow>
        </Box>
        <Box as="tbody" display="web_table-row-group" height="100%">
          {!loading
            ? data.map((row, index) => (
                <TableRow
                  key={row[rowKey]}
                  selectable={selectable}
                  selected={selectedRowKeys.has(row[rowKey])}
                  onSelectionChange={() => handleToggleCheckbox(row[rowKey])}
                  expandable={isDefined(renderExpanded)}
                  renderExpanded={() => (
                    <Paper backgroundColor="surface1" p={16}>
                      {renderExpanded?.(row)}
                    </Paper>
                  )}
                  expanded={expandedRowKeys?.includes(row[rowKey])}
                  disabled={disabledRowKeys?.includes(row[rowKey])}
                >
                  {columns.map(
                    ({
                      key,
                      dataKey,
                      alignHorizontal,
                      alignVertical,
                      lineLimit,
                      wordBreak,
                      whiteSpace,
                      overflowWrap,
                      onDataCell,
                      formatData,
                      renderDataCell,
                      selectable: cellSelectable,
                      width: _,
                      ...column
                    }: TableColumnProps<Data>) => (
                      <TableDataCell
                        key={key}
                        onClick={
                          isCellClickEnabled
                            ? onDataCell
                              ? () => {
                                  onDataCell.onClick?.(row);

                                  setSelectedCellKey(getCellKey(key, index));
                                }
                              : undefined
                            : onRow
                            ? () => onRow.onClick?.(row)
                            : undefined
                        }
                        onCopy={() => onDataCell?.onCopy?.(row)}
                        alignVertical={alignVertical?.dataCell}
                        alignHorizontal={alignHorizontal?.dataCell}
                        lineLimit={lineLimit?.dataCell}
                        wordBreak={wordBreak?.dataCell}
                        whiteSpace={whiteSpace?.dataCell}
                        overflowWrap={overflowWrap?.dataCell}
                        disabled={disabledRowKeys?.includes(row[rowKey])}
                        selected={cellSelectable && selectedCellKey === getCellKey(key, index)}
                        renderCell={renderDataCell ? () => renderDataCell?.(row) : undefined}
                        {...column}
                      >
                        {isDefined(formatData) ? formatData(row) : dataKey ? row[dataKey] : null}
                      </TableDataCell>
                    )
                  )}
                </TableRow>
              ))
            : Array.from({ length: 3 }, (_, rowIndex) => (
                <TableRow key={rowIndex} disabled={true} selectable={selectable} expandable={isDefined(renderExpanded)}>
                  {Array.from({ length: 4 }, (_, columnIndex) => (
                    <TableDataCell
                      key={columnIndex}
                      disabled={true}
                      alignHorizontal="start"
                      renderCell={() => <Skeleton width={rowIndex === 1 ? 80 : 104} height={18} />}
                    />
                  ))}
                </TableRow>
              ))}
        </Box>
      </Box>
    </ScrollBox>
  );
};

Table.displayName = 'Table';

Table.Column = TableColumn;
