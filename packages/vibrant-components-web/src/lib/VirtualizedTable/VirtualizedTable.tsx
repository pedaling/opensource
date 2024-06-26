/* eslint-disable @typescript-eslint/naming-convention */
import { Children, isValidElement, useMemo, useState } from 'react';
import { TableVirtuoso } from 'react-virtuoso';
import type { SortDirection, TableColumnProps } from '@vibrant-ui/components';
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
} from '@vibrant-ui/components';
import { Box, Image, useConfig } from '@vibrant-ui/core';
import { isDefined, useControllableState } from '@vibrant-ui/utils';
import type { VirtualizedTableProps } from './VirtualizedTableProps';

const getCellKey = (key: any, rowIndex: number) => `${key}:${rowIndex}`;

export const VirtualizedTable = <Data extends Record<string, any>, RowKey extends keyof Data>({
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
  tableLayout = 'fixed',
  testId = 'table',
  height = 500,
}: VirtualizedTableProps<Data, RowKey>) => {
  const columns =
    Children.toArray(children)
      .filter(isValidElement<TableColumnProps<Data>>)
      .map(({ props, key }) => ({ ...props, key: key as string })) ?? [];

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

  const renderItemContent = (index: number, item: Data) => {
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

    if (index >= 1 && tableData[index - 1][rowKey] === item[rowKey]) {
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
            {renderExpanded?.(item)}
          </Paper>
        </Box>
      );
    }

    return (
      <TableRow
        key={item[rowKey]}
        selectable={selectable}
        selected={selectedRowKeys.has(item[rowKey])}
        onSelectionChange={() => handleToggleCheckbox(item[rowKey])}
        onExpandChange={() => handleExpand(item[rowKey])}
        expandable={isDefined(renderExpanded)}
        renderExpanded={() => (
          <Paper backgroundColor="surface1" p={16}>
            {renderExpanded?.(item)}
          </Paper>
        )}
        expanded={expandedKeys?.has(item[rowKey])}
        disabled={disabledRowKeys?.includes(item[rowKey])}
        shouldRenderRow={false}
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
            // eslint-disable-next-line max-lines
            onDataCell,
            formatData,
            renderDataCell,
            selectable: cellSelectable,
            ...column
          }: TableColumnProps<Data>) => (
            <TableDataCell
              key={key}
              onClick={
                isCellClickEnabled
                  ? onDataCell
                    ? () => {
                        onDataCell.onClick?.(item);

                        setSelectedCellKey(getCellKey(key, index));
                      }
                    : undefined
                  : onRow
                  ? () => onRow.onClick?.(item)
                  : undefined
              }
              onCopy={() => onDataCell?.onCopy?.(item)}
              alignVertical={alignVertical?.dataCell}
              alignHorizontal={alignHorizontal?.dataCell}
              lineLimit={lineLimit?.dataCell}
              wordBreak={wordBreak?.dataCell}
              whiteSpace={whiteSpace?.dataCell}
              overflowWrap={overflowWrap?.dataCell}
              disabled={disabledRowKeys?.includes(item[rowKey])}
              selected={cellSelectable && selectedCellKey === getCellKey(key, index)}
              renderCell={renderDataCell ? () => renderDataCell?.(item) : undefined}
              {...column}
            >
              {isDefined(formatData) ? formatData(item) : dataKey ? item[dataKey] : null}
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
      components={{
        Table: ({ style, ...props }) => (
          <table {...props} style={{ ...style, width: '100%', tableLayout }} data-testid={testId} />
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
      )}
      itemContent={renderItemContent}
    />
  );
};

VirtualizedTable.displayName = 'VirtualizedTable';
