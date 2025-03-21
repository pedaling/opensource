/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElement } from 'react';
import { Children, isValidElement, useEffect, useMemo, useRef, useState } from 'react';
import { Box, Image, ScrollBox, isNative, useConfig } from '@vibrant-ui/core';
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
import type { TableDataCellProps } from './TableDataCell/TableDataCellProps';
import { TableHeaderCell } from './TableHeaderCell';
import type { TableHeaderCellProps } from './TableHeaderCell/TableHeaderCellProps';
import type { TableCellRange, TableProps, TableSortBy, UseTableResult } from './TableProps';
import { TableRow } from './TableRow';
import type { SortDirection } from './TableSortIcon';

const getCellKey = (key: any, rowIndex: number) => `${key}:${rowIndex}`;

const getCornersFromSelectedRange = (selectedRange: TableCellRange) => {
  const { anchor, cursor } = selectedRange;

  return {
    startRow: Math.min(anchor.rowIdx, cursor.rowIdx),
    endRow: Math.max(anchor.rowIdx, cursor.rowIdx),
    startCol: Math.min(anchor.colIdx, cursor.colIdx),
    endCol: Math.max(anchor.colIdx, cursor.colIdx),
  };
};

const isCellInSelectedRange = (
  rowIdx: number,
  colIdx: number,
  multiCellSelectable: boolean,
  selectedRange?: TableCellRange
) => {
  if (!multiCellSelectable || !selectedRange) {
    return false;
  }

  const { startRow, endRow, startCol, endCol } = getCornersFromSelectedRange(selectedRange);

  return rowIdx >= startRow && rowIdx <= endRow && colIdx >= startCol && colIdx <= endCol;
};

const isCellOnEdgeOfSelectedRange = (
  rowIdx: number,
  colIdx: number,
  multiCellSelectable: boolean,
  selectingRangeFromCell: boolean,
  selectedRange?: TableCellRange
) => {
  const cellOnEdge: TableDataCellProps['selectedOnEdge'] = { top: true, bottom: true, left: true, right: true };

  if (!multiCellSelectable || !selectedRange) {
    return cellOnEdge;
  }

  const { startRow, endRow, startCol, endCol } = getCornersFromSelectedRange(selectedRange);

  cellOnEdge.top = rowIdx === startRow && colIdx >= startCol && colIdx <= endCol && selectingRangeFromCell;
  cellOnEdge.bottom = rowIdx === endRow && colIdx >= startCol && colIdx <= endCol;
  cellOnEdge.left = colIdx === startCol && rowIdx >= startRow && rowIdx <= endRow;
  cellOnEdge.right = colIdx === endCol && rowIdx >= startRow && rowIdx <= endRow;

  return cellOnEdge;
};

const isHeaderOnEdgeOfSelectedRange = (
  colIdx: number,
  multiCellSelectable: boolean,
  selectedRange?: TableCellRange
) => {
  const cellOnEdge: TableHeaderCellProps['selectedOnEdge'] = { left: true, right: true };

  if (!multiCellSelectable || !selectedRange) {
    return cellOnEdge;
  }

  const { startCol, endCol } = getCornersFromSelectedRange(selectedRange);

  cellOnEdge.left = colIdx === startCol;
  cellOnEdge.right = colIdx === endCol;

  return cellOnEdge;
};

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

  const isSelectingRange = useRef(false);
  const [selectedRange, setSelectedRange] = useState<TableCellRange>();
  const [selectingRangeFromCell, setSelectingRangeFromCell] = useState(true);

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

  const isShiftKeyPressed = useRef(false);

  // Shift 키 누르고 있는 동안에만 range 선택 가능
  useEffect(() => {
    if (isNative) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Shift') {
        isShiftKeyPressed.current = true;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Shift') {
        isShiftKeyPressed.current = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const copySelectedCells = () => {
    if (!selectedRange) {
      return;
    }

    const { startRow, endRow, startCol, endCol } = getCornersFromSelectedRange(selectedRange);

    const selectedCells = [];

    const columnNames = columns.slice(startCol, endCol + 1).map(column => column.title || column.dataKey || '');

    selectedCells.push(columnNames.join('\t'));

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
              (
                {
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
                }: TableColumnProps<Data>,
                colIdx
              ) => (
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
                  multiCellSelectable={multiCellSelectable}
                  onPressIn={() => {
                    setSelectingRangeFromCell(false);
                    isSelectingRange.current = true;
                    setSelectedRange(prev => ({
                      anchor:
                        isShiftKeyPressed.current && !selectingRangeFromCell && prev
                          ? { rowIdx: 0, colIdx: prev.anchor.colIdx }
                          : { rowIdx: 0, colIdx },
                      cursor: { rowIdx: data.length - 1, colIdx },
                    }));
                  }}
                  onPressOut={() => {
                    isSelectingRange.current = false;
                  }}
                  onHoverIn={() => {
                    if (!isSelectingRange.current) {
                      return;
                    }

                    setSelectedRange(prev => ({
                      anchor: prev ? prev.anchor : { rowIdx: 0, colIdx },
                      cursor: { rowIdx: selectingRangeFromCell ? 0 : data.length - 1, colIdx },
                    }));
                  }}
                  selected={
                    !selectingRangeFromCell && isCellInSelectedRange(0, colIdx, multiCellSelectable, selectedRange)
                  }
                  selectedOnEdge={isHeaderOnEdgeOfSelectedRange(colIdx, multiCellSelectable, selectedRange)}
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
                  )}
                  expanded={expandedRowKeys?.includes(row[rowKey])}
                  disabled={disabledRowKeys?.includes(row[rowKey])}
                >
                  {columns.map(
                    (
                      {
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
                      }: TableColumnProps<Data>,
                      colIdx
                    ) => (
                      <TableDataCell
                        key={key}
                        onClick={() => {
                          if (isCellClickEnabled && onDataCell) {
                            onDataCell.onClick?.(row);
                            setSelectedCellKey(getCellKey(key, rowIdx));
                          } else if (onRow) {
                            onRow.onClick?.(row);
                          }
                        }}
                        onPressIn={() => {
                          setSelectingRangeFromCell(true);
                          isSelectingRange.current = true;
                          setSelectedRange(prev => ({
                            anchor: isShiftKeyPressed.current && prev ? prev.anchor : { rowIdx, colIdx },
                            cursor: { rowIdx, colIdx },
                          }));
                        }}
                        onPressOut={() => {
                          isSelectingRange.current = false;
                        }}
                        onHoverIn={() => {
                          if (!isSelectingRange.current) {
                            return;
                          }

                          setSelectedRange(prev => ({
                            anchor: prev ? prev.anchor : { rowIdx, colIdx },
                            cursor: { rowIdx: selectingRangeFromCell ? rowIdx : data.length - 1, colIdx },
                          }));
                        }}
                        onCopy={() => {
                          if (!multiCellSelectable) {
                            onDataCell?.onCopy?.(row);
                          }
                        }}
                        alignVertical={alignVertical?.dataCell}
                        alignHorizontal={alignHorizontal?.dataCell}
                        lineLimit={lineLimit?.dataCell}
                        wordBreak={wordBreak?.dataCell}
                        whiteSpace={whiteSpace?.dataCell}
                        overflowWrap={overflowWrap?.dataCell}
                        disabled={disabledRowKeys?.includes(row[rowKey])}
                        selected={
                          (cellSelectable && selectedCellKey === getCellKey(key, rowIdx)) ||
                          (multiCellSelectable &&
                            isCellInSelectedRange(rowIdx, colIdx, multiCellSelectable, selectedRange))
                        }
                        selectedOnEdge={isCellOnEdgeOfSelectedRange(
                          rowIdx,
                          colIdx,
                          multiCellSelectable,
                          selectingRangeFromCell,
                          selectedRange
                        )}
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
