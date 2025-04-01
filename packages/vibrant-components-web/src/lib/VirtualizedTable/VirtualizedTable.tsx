/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/naming-convention */
import { Children, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TableVirtuoso } from 'react-virtuoso';
import type { SortDirection, TableCellRange, TableColumnProps } from '@vibrant-ui/components';
import {
  Body,
  GhostButton,
  HStack,
  Paper,
  Skeleton,
  TableDataCell,
  TableHeaderCell,
  TableRow,
  VStack,
  getCornersFromSelectedRange,
  isCellInSelectedRange,
  isCellOnEdgeOfSelectedRange,
  isHeaderOnEdgeOfSelectedRange,
} from '@vibrant-ui/components';
import { Box, Image, isNative, useConfig } from '@vibrant-ui/core';
import { isDefined, useControllableState } from '@vibrant-ui/utils';
import type { VirtualizedTableProps } from './VirtualizedTableProps';

const getCellKey = (key: any, rowIndex: number) => `${key}:${rowIndex}`;

export const VirtualizedTable = <Data extends Record<string, any>, RowKey extends keyof Data>({
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
  tableLayout = 'fixed',
  testId = 'table',
  height = 500,
}: VirtualizedTableProps<Data, RowKey>) => {
  const columns = useMemo(
    () =>
      Children.toArray(children)
        .filter(isValidElement<TableColumnProps<Data>>)
        .map(({ props, key }) => ({ ...props, key: key as string })) ?? [],
    [children]
  );

  const [selectedRowKeys, setSelectedRowKeys] = useControllableState<Set<Data[RowKey]>>({
    defaultValue: new Set<Data[RowKey]>(),
    onValueChange: (value: Set<Data[RowKey]>) => onSelectionChange?.([...value]),
  });
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

  const handleToggleCheckbox = (key: Data[RowKey]) => {
    const newSelectedRowKeys = new Set(selectedRowKeys);

    if (newSelectedRowKeys.has(key)) {
      newSelectedRowKeys.delete(key);
    } else {
      newSelectedRowKeys.add(key);
    }

    setSelectedRowKeys(newSelectedRowKeys);
  };

  const copySelectedCells = useCallback(() => {
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

    onCopy?.(clipboardText);
    navigator?.clipboard.writeText(clipboardText);
  }, [columns, data, onCopy, selectedRange]);

  const handlePressOut = useCallback(() => {
    if (!multiCellSelectable) {
      return;
    }

    isSelectingRange.current = false;
    // TODO: workaround for react-virtuoso, 개선 필요
    // render 후에 focus 가  body로 가는 문제
    setTimeout(() => tableRef.current?.focus(), 0);
  }, [multiCellSelectable]);

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

  const [expandedKeys, setExpandedKeys] = useState<Set<Data[RowKey]>>(new Set(expandedRowKeys ?? []));

  const handleExpand = (key: Data[RowKey]) => {
    const newExpandedKeys = new Set(expandedKeys);

    if (newExpandedKeys.has(key)) {
      newExpandedKeys.delete(key);
    } else {
      newExpandedKeys.add(key);
    }

    setExpandedKeys(newExpandedKeys);
  };

  const getColumnsCount = () => {
    let columnsNum = columns.length;

    if (selectable) {
      columnsNum += 1;
    }

    if (renderExpanded) {
      columnsNum += 1;
    }

    return columnsNum;
  };

  const tableData = useMemo(() => {
    if (loading) {
      return Array.from({ length: Math.floor(height / 45) }, (_, rowIndex) => ({ [rowKey]: rowIndex })) as Data[];
    }

    const resultData = [...data];

    let count = 1;

    data.forEach((row, index) => {
      if (expandedKeys.has(row[rowKey])) {
        resultData.splice(index + count, 0, row);

        count++;
      }
    });

    return resultData;
  }, [data, expandedKeys, height, loading, rowKey]);

  const renderItemContent = (rowIdx: number, row: Data) => {
    if (loading) {
      return (
        <TableRow
          disabled={true}
          selectable={selectable}
          expandable={isDefined(renderExpanded)}
          shouldRenderRow={false}
        >
          {Array.from({ length: 4 }, (_, columnIndex) => (
            <TableDataCell
              key={columnIndex}
              disabled={true}
              alignHorizontal="start"
              renderCell={() => <Skeleton width={104} height={18} />}
            />
          ))}
        </TableRow>
      );
    }

    if (rowIdx >= 1 && tableData[rowIdx - 1][rowKey] === row[rowKey]) {
      return (
        <Box
          as="td"
          display="web_table-cell"
          colSpan={getColumnsCount()}
          borderBottomStyle="solid"
          borderBottomColor="outline1"
          borderBottomWidth={1}
        >
          <Paper backgroundColor="surface1" p={16}>
            {renderExpanded?.(row)}
          </Paper>
        </Box>
      );
    }

    return (
      <TableRow
        key={row[rowKey]}
        selectable={selectable}
        selected={selectedRowKeys.has(row[rowKey])}
        onSelectionChange={() => handleToggleCheckbox(row[rowKey])}
        onExpandChange={() => handleExpand(row[rowKey])}
        expandable={isDefined(renderExpanded)}
        renderExpanded={() => (
          <Paper backgroundColor="surface1" p={16}>
            {renderExpanded?.(row)}
          </Paper>
        )}
        expanded={expandedKeys?.has(row[rowKey])}
        disabled={disabledRowKeys?.includes(row[rowKey])}
        shouldRenderRow={false}
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
              // eslint-disable-next-line max-lines
              onDataCell,
              formatData,
              renderDataCell,
              selectable: cellSelectable,
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
                (multiCellSelectable && isCellInSelectedRange(rowIdx, colIdx, multiCellSelectable, selectedRange))
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
    );
  };

  const {
    translations: { table: tableTranslation },
  } = useConfig();

  return (
    <TableVirtuoso
      style={{ height, border: '1px solid #00000026' }}
      data={tableData}
      onCopy={copySelectedCells}
      components={{
        Table: ({ style, ...props }) => (
          <table
            ref={tableRef}
            tabIndex={0}
            {...props}
            style={{ ...style, width: '100%', tableLayout }}
            data-testid={testId}
          />
        ),
      }}
      fixedHeaderContent={() => (
        <TableRow
          header={true}
          selectable={selectable}
          selected={selectedRowKeys.size !== 0}
          expanded={!loading && tableData.length === 0}
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
          indeterminate={selectedRowKeys.size !== tableData.length}
          onSelectionChange={handleToggleAllCheckbox}
          disabled={loading}
        >
          {isDefined(renderExpanded) && (
            <TableHeaderCell renderCell={() => <Box width={16} height={16} />} width={48} />
          )}
          {!loading
            ? columns.map(
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
                    onSort={(sortDirection: SortDirection) => onSort?.({ dataKey, direction: sortDirection })}
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
      )}
      itemContent={renderItemContent}
    />
  );
};

VirtualizedTable.displayName = 'VirtualizedTable';
