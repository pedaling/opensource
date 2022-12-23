import { Box, PressableBox } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { Body } from '../../Body';
import { useTableRow } from '../context';
import { withTableDataCellVariation } from './TableDataCellProps';

export const TableDataCell = withTableDataCellVariation(
  ({
    children,
    lineLimit,
    wordBreak,
    overflowWrap,
    whiteSpace,
    onClick,
    onCopy,
    renderCell,
    alignHorizontal = 'center',
    alignVertical = 'center',
    textAlign,
    width,
    color,
    disabled,
    selected,
  }) => {
    const handleCopyEvent = () => {
      if (typeof navigator === 'undefined' || children === undefined || children === null) {
        return;
      }

      navigator.clipboard.writeText(children.toString());

      onCopy?.();
    };

    const { selected: rowSelected } = useTableRow();

    return (
      <PressableBox
        as="td"
        display="table-cell"
        py={12}
        px={16}
        width={width}
        onClick={onClick}
        disabled={disabled || !isDefined(onClick)}
        cursor={disabled || !isDefined(onClick) ? 'default' : 'pointer'}
      >
        <>
          {selected && (
            <Box
              position="absolute"
              top={0}
              left={0}
              bottom={0}
              right={0}
              borderWidth={1}
              borderStyle="solid"
              borderColor="outlineInformative"
            />
          )}
          {rowSelected && (
            <Box
              position="absolute"
              left={0}
              right={0}
              top={0}
              bottom={0}
              backgroundColor="onView1"
              opacity="overlay.active"
            />
          )}
          <Box alignItems={alignHorizontal} justifyContent={alignVertical} overflowWrap={overflowWrap}>
            {renderCell ? (
              renderCell()
            ) : (
              <Body
                level={2}
                lineLimit={lineLimit}
                wordBreak={wordBreak}
                textAlign={textAlign}
                whiteSpace={whiteSpace}
                color={color}
                onCopy={handleCopyEvent}
              >
                {children}
              </Body>
            )}
          </Box>
        </>
      </PressableBox>
    );
  }
);
