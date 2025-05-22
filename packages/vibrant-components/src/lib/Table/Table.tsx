/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElement } from 'react';
import { Children, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, Image, ScrollBox, isNative, useConfig } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
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

export const getCornersFromSelectedRange = (selectedRange: TableCellRange) => {
  const { anchor, cursor } = selectedRange;

  return {
    startRow: Math.min(anchor.rowIdx, cursor.rowIdx),
    endRow: Math.max(anchor.rowIdx, cursor.rowIdx),
    startCol: Math.min(anchor.colIdx, cursor.colIdx),
    endCol: Math.max(anchor.colIdx, cursor.colIdx),
  };
};

export const isCellInSelectedRange = (
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

export const isCellOnEdgeOfSelectedRange = (
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

export const isHeaderOnEdgeOfSelectedRange = (
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
  multiCellSelectable = true,
  selectButtons,
  onSelectionChange,
  renderExpanded,
  onRow,
  onSort,
  onCopy,
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

  const [sortBy, setSortBy] = useState<TableSortBy<Data>>();

  const defaultSortColumn = useMemo(
    () => columns.find(column => column.sortDirection && column.sortDirection !== 'none'),
    [columns]
  );

  const defaultSortBy = useMemo(
    () => ({
      dataKey: defaultSortColumn?.dataKey,
      direction: defaultSortColumn?.sortDirection ?? 'none',
    }),
    [defaultSortColumn]
  );

  // sortBy가 존재하고 columns에 해당 dataKey가 있을 때만 sortBy 적용 (columns 변경에 대비)
  const finalSortBy = useMemo(
    () => (sortBy && columns.some(column => column.dataKey === sortBy.dataKey) ? sortBy : defaultSortBy),
    [columns, defaultSortBy, sortBy]
  );

  const handleChangeSort = (sortBy: TableSortBy<Data>) => {
    setSortBy(sortBy);

    onSort?.(sortBy);
  };

  const [selectedRows, setSelectedRows] = useState(new Set<Data>());

  // 기존 onSelectionChange 동작을 보장하기 위해 rowKey로 호출할 수 있도록 변환
  const mapRowsToRowKeys = useCallback((rows: Set<Data>) => [...Array(...rows).map(row => row[rowKey])], [rowKey]);

  const handleSetSelectedRows = useCallback(
    (value: Set<Data>) => {
      setSelectedRows(value);
      onSelectionChange?.(mapRowsToRowKeys(value));
    },
    [mapRowsToRowKeys, onSelectionChange]
  );

  // 데이터 변경 시에만 selectedRows 변경 및 onSelectionChange 호출하기 위해 사용
  const prevData = useRef(data);

  // data가 변경되면 data에 존재하지 않는 row를 selectedRows에서 제거
  useEffect(() => {
    if (prevData.current === data) {
      return;
    }

    const dataSet = new Set(data);
    // prevData에서 data에 존재하는 row를 제거하고 남은 row가 제거 대상
    const toBeRemovedRows = new Set(prevData.current.filter(row => !dataSet.has(row)));

    if (toBeRemovedRows.size > 0) {
      setSelectedRows(prev => {
        const newSet = new Set(prev);
        const sizeBeforeRemove = newSet.size;

        toBeRemovedRows.forEach(row => newSet.delete(row));

        // 선택된 상태에서 제거된 row가 있을 때만 onSelectionChange 호출하고 상태를 변경한다
        if (sizeBeforeRemove > newSet.size) {
          onSelectionChange?.(mapRowsToRowKeys(newSet));

          return newSet;
        }

        return prev;
      });
    }

    prevData.current = data;
  }, [data, mapRowsToRowKeys, onSelectionChange]);

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

  const copySelectedCells = useCallback(() => {
    if (!selectedRange) {
      return;
    }

    const { startRow, endRow, startCol, endCol } = getCornersFromSelectedRange(selectedRange);

    const selectedCells = [];

    if (endRow - startRow + 1 === data.length) {
      const columnNames = columns.slice(startCol, endCol + 1).map(column => column.title || column.dataKey || '');

      selectedCells.push(columnNames.join('\t'));
    }

    for (let rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
      const row = data[rowIdx];
      const rowCells = columns.slice(startCol, endCol + 1).map(column => {
        const cellData = column.dataKey ? row[column.dataKey] : null;

        return isDefined(column.formatData) ? column.formatData(row) : cellData;
      });

      selectedCells.push(rowCells.join('\t'));
    }

    const clipboardText = selectedCells.join('\n');

    onCopy?.(clipboardText);
    navigator?.clipboard.writeText(clipboardText);
  }, [columns, data, onCopy, selectedRange]);

  const handlePressOut = useCallback(() => {
    if (!multiCellSelectable) {
      return;
    }

    isSelectingRange.current = false;
  }, [multiCellSelectable]);

  const handleToggleCheckbox = (key: Data) => {
    const newSelectedRows = new Set(selectedRows);

    if (newSelectedRows.has(key)) {
      newSelectedRows.delete(key);
    } else {
      newSelectedRows.add(key);
    }

    handleSetSelectedRows(newSelectedRows);
  };

  const handleToggleAllCheckbox = ({ value }: { value: boolean }) => {
    if (value) {
      handleSetSelectedRows(new Set(data.filter(row => !disabledRowKeys?.includes(row[rowKey]))));
    } else {
      handleSetSelectedRows(new Set());
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
            selected={selectedRows.size !== 0}
            expanded={!loading && data.length === 0}
            renderExpanded={() => (
              <VStack alignHorizontal="center" mt={32} mb={64}>
                {isDefined(emptyImage) && <Image src={emptyImage} alt="" width={124} height={124} />}
                <Body level={1}>{emptyText}</Body>
              </VStack>
            )}
            overlaid={selectable && selectedRows.size > 0}
            renderOverlay={() => (
              <HStack alignVertical="center" height="100%" spacing={12}>
                {selectedRows.size > 0 ? (
                  <Body level={2} weight="medium">
                    {tableTranslation.numberOfSelected.replace('{count}', selectedRows.size.toString())}
                  </Body>
                ) : null}
                <HStack alignVertical="center" height="100%" spacing={12}>
                  {selectButtons?.map(({ text, onClick }) => (
                    <GhostButton
                      key={text}
                      size="md"
                      color="onViewInformative"
                      onClick={() => onClick(data.filter(row => selectedRows.has(row[rowKey])))}
                    >
                      {text}
                    </GhostButton>
                  ))}
                </HStack>
              </HStack>
            )}
            indeterminate={selectedRows.size !== data.length}
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
                  sortDirection={finalSortBy.dataKey === dataKey ? finalSortBy.direction : 'none'}
                  onSort={(sortDirection: SortDirection) => handleChangeSort({ dataKey, direction: sortDirection })}
                  multiCellSelectable={multiCellSelectable}
                  onPressIn={() => {
                    if (!multiCellSelectable) {
                      return;
                    }

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
                  onPressOut={handlePressOut}
                  onHoverIn={() => {
                    if (!isSelectingRange.current || !multiCellSelectable) {
                      return;
                    }

                    // cursor 위치가 같으면 range 선택하지 않음
                    if (selectedRange?.cursor?.colIdx === colIdx) {
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
                  key={rowKey ? row[rowKey] : rowIdx}
                  selectable={selectable}
                  selected={selectedRows.has(row)}
                  onSelectionChange={() => handleToggleCheckbox(row)}
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
                          if (!multiCellSelectable) {
                            return;
                          }

                          setSelectingRangeFromCell(true);
                          isSelectingRange.current = true;
                          setSelectedRange(prev => ({
                            anchor: isShiftKeyPressed.current && prev ? prev.anchor : { rowIdx, colIdx },
                            cursor: { rowIdx, colIdx },
                          }));
                        }}
                        onPressOut={handlePressOut}
                        onHoverIn={() => {
                          if (!isSelectingRange.current || !multiCellSelectable) {
                            return;
                          }

                          // cursor 위치가 같으면 range 선택하지 않음
                          if (selectedRange?.cursor?.rowIdx === rowIdx && selectedRange?.cursor?.colIdx === colIdx) {
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
