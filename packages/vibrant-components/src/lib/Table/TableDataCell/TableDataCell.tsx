import { Box, PressableBox } from '@vibrant-ui/core';
import { Body } from '../../Body';
import { withTableDataCellVariation } from './TableDataCellProps';

export const TableDataCell = withTableDataCellVariation(
  ({
    children,
    lineLimit,
    wordBreak,
    onClick,
    renderCell,
    alignHorizontal = 'center',
    alignVertical = 'center',
    textAlign,
    flexBasis,
    flexGrow,
    flexShrink,
    maxWidth,
    minWidth,
    width,
    borderBottomColor,
    borderBottomWidth,
    borderBottomStyle,
  }) =>
    onClick ? (
      <PressableBox
        as="td"
        py={12}
        px={16}
        maxWidth={maxWidth}
        width={width}
        minWidth={minWidth ?? 0}
        flexBasis={flexBasis}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        borderBottomColor={borderBottomColor}
        borderBottomWidth={borderBottomWidth}
        borderBottomStyle={borderBottomStyle}
        onClick={onClick}
      >
        <>
          {renderCell ? (
            renderCell()
          ) : (
            <Body level={2} lineLimit={lineLimit} wordBreak={wordBreak} textAlign={textAlign}>
              {children}
            </Body>
          )}
        </>
      </PressableBox>
    ) : (
      <Box
        as="td"
        py={12}
        px={16}
        alignItems={alignHorizontal}
        justifyContent={alignVertical}
        minWidth={minWidth ?? 0}
        flexBasis={flexBasis}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        maxWidth={maxWidth}
        width={width}
        borderBottomColor={borderBottomColor}
        borderBottomWidth={borderBottomWidth}
        borderBottomStyle={borderBottomStyle}
      >
        {renderCell ? (
          renderCell()
        ) : (
          <Body level={2} lineLimit={lineLimit} wordBreak={wordBreak} textAlign={textAlign}>
            {children}
          </Body>
        )}
      </Box>
    )
);
