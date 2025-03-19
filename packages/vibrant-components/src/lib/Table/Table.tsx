/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElement } from 'react';
import { Children, isValidElement, useEffect, useMemo, useRef, useState } from 'react';
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
import type { TableCellRange, TableProps, TableSortBy, UseTableResult } from './TableProps';
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
  multiCellSelectable = false,
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
  const columns = useMemo(
    () =>
      (
        Children.toArray(children).filter(child => isValidElement(child)) as unknown as ReactElement<
          TableColumnProps<Data>
        >[]
      ).map(({ props, key }) => ({ ...props, key: key as string })) ?? [],
    [children]
  );

  const [sortBy, setSortBy] = useState<TableSortBy<Data>>({
    direction: 'none',
  });

  useEffect(() => {
    const defaultSort = columns.find(column => column.sortDirection && column.sortDirection !== 'none');

    if (defaultSort && defaultSort.dataKey !== sortBy.dataKey) {
      setSortBy({
        dataKey: defaultSort.dataKey,
        direction: defaultSort.sortDirection ?? 'none',
      });
    }
  }, [columns, sortBy.dataKey]);

  const handleChangeSort = (sortBy: TableSortBy<Data>) => {
    setSortBy(sortBy);

    onSort?.(sortBy);
  };

  const [selectedRowKeys, setSelectedRowKeys] = useControllableState<Set<Data[RowKey]>>({
    defaultValue: new Set<Data[RowKey]>(),
    onValueChange: (value: Set<Data[RowKey]>) => onSelectionChange?.([...value]),
  });

  useEffect(() => {
    setSelectedRowKeys(new Set(data.filter(row => selectedRowKeys.has(row[rowKey])).map(row => row[rowKey])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, rowKey]);

  const [selectedCellKey, setSelectedCellKey] = useState<string>();
  const isCellClickEnabled = columns?.some(column => isDefined(column.onDataCell));

  const [selectedRange, setSelectedRange] = useState<TableCellRange>();
  const [isSelectingRange, setIsSelectingRange] = useState(false);

  const isCellInSelectedRange = (rowIdx: number, colIdx: number) => {
    if (!selectedRange) {
      return false;
    }

    const { anchor, cursor } = selectedRange;

    const startRow = Math.min(anchor.rowIdx, cursor.rowIdx);
    const endRow = Math.max(anchor.rowIdx, cursor.rowIdx);
    const startCol = Math.min(anchor.colIdx, cursor.colIdx);
    const endCol = Math.max(anchor.colIdx, cursor.colIdx);

    return rowIdx >= startRow && rowIdx <= endRow && colIdx >= startCol && colIdx <= endCol;
  };

  const tableRef = useRef<HTMLTableElement>(null);

  // multiCellSelectable일 때, 테이블의 selectstart 이벤트를 막아서 텍스트 드래그 방지
  useEffect(() => {
    if (!tableRef.current) {
      return;
    }

    const tableEl = tableRef.current;

    const handleSelectStart = (event: Event) => {
      if (multiCellSelectable) {
        event.preventDefault();
      }
    };

    tableEl.addEventListener('selectstart', handleSelectStart);

    return () => {
      tableEl.removeEventListener('selectstart', handleSelectStart);
    };
  }, [multiCellSelectable]);

  const copySelectedCells = () => {
    if (!selectedRange) {
      return;
    }

    const { anchor, cursor } = selectedRange;

    const startRow = Math.min(anchor.rowIdx, cursor.rowIdx);
    const endRow = Math.max(anchor.rowIdx, cursor.rowIdx);
    const startCol = Math.min(anchor.colIdx, cursor.colIdx);
    const endCol = Math.max(anchor.colIdx, cursor.colIdx);

    const selectedCells = [];

    for (let rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
      const row = data[rowIdx];
      const rowCells = columns.slice(startCol, endCol + 1).map(column => {
        const cellData = column.dataKey ? row[column.dataKey] : null;

        return isDefined(column.formatData) ? column.formatData(row) : cellData;
      });

      selectedCells.push(rowCells.join('\t'));
    }

    const clipboardText = selectedCells.join('\n');

    navigator?.clipboard.writeText(clipboardText);
  };

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
      rounded="sm"
      data-testid={testId}
    >
      <Box
        ref={tableRef}
        as="table"
        display="web_table"
        borderCollapse="separate"
        tableLayout={tableLayout}
        width="100%"
        height="100%"
        onCopy={copySelectedCells}
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
            {columns.map(
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
                  sortDirection={sortBy.dataKey === dataKey ? sortBy.direction : 'none'}
                  onSort={(sortDirection: SortDirection) => handleChangeSort({ dataKey, direction: sortDirection })}
                />
              )
            )}
          </TableRow>
        </Box>
        <Box as="tbody" display="web_table-row-group" height="100%">
          {!loading
            ? data.map((row, rowIdx) => (
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
                    /* eslint-disable prettier/prettier */
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
                    }: TableColumnProps<Data>, colIdx) => (
                      <TableDataCell
                        key={key}
                        onClick={
                          isCellClickEnabled
                            ? onDataCell
                              ? () => {
                                  onDataCell.onClick?.(row);

                                  setSelectedCellKey(getCellKey(key, rowIdx));
                                }
                              : undefined
                            : onRow
                            ? () => onRow.onClick?.(row)
                            : undefined
                        }
                        onPressIn={() => {
                          setIsSelectingRange(true);
                          setSelectedRange({ anchor: { rowIdx, colIdx }, cursor: { rowIdx, colIdx } });
                        }}
                        onPressOut={() => {
                          setIsSelectingRange(false);
                        }}
                        onHoverIn={() => {
                          if (!isSelectingRange) {
                            return;
                          }

                          setSelectedRange(prev => ({
                            anchor: prev ? prev.anchor : { rowIdx, colIdx },
                            cursor: { rowIdx, colIdx }
                          }));
                        }}
                        onCopy={() => {
                          if (multiCellSelectable) {
                            return;
                          }

                          onDataCell?.onCopy?.(row);
                        }}
                        alignVertical={alignVertical?.dataCell}
                        alignHorizontal={alignHorizontal?.dataCell}
                        lineLimit={lineLimit?.dataCell}
                        wordBreak={wordBreak?.dataCell}
                        whiteSpace={whiteSpace?.dataCell}
                        overflowWrap={overflowWrap?.dataCell}
                        disabled={disabledRowKeys?.includes(row[rowKey])}
                        selected={cellSelectable && selectedCellKey === getCellKey(key, rowIdx) || multiCellSelectable && isCellInSelectedRange(rowIdx, colIdx)}
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
