import { PressableBox } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { Body } from '../../Body';
import { withTableDataCellVariation } from './TableDataCellProps';

export const TableDataCell = withTableDataCellVariation(
  ({
    children,
    lineLimit,
    wordBreak,
    onClick,
    onCopy,
    renderCell,
    alignHorizontal = 'center',
    alignVertical = 'center',
    textAlign,
    flexBasis = 0,
    flexGrow = 1,
    flexShrink = 1,
    width,
    minWidth = 120,
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

    return (
      <PressableBox
        as="td"
        py={selected ? 11 : 12}
        px={selected ? 15 : 16}
        alignItems={alignHorizontal}
        justifyContent={alignVertical}
        flexBasis={width ?? flexBasis}
        flexGrow={isDefined(width) ? 0 : flexGrow}
        flexShrink={isDefined(width) ? 0 : flexShrink}
        minWidth={minWidth}
        width={width}
        onClick={onClick}
        borderStyle="solid"
        borderColor="outlineInformative"
        borderWidth={selected ? 1 : 0}
        disabled={disabled || !isDefined(onClick)}
        cursor={isDefined(onClick) ? 'pointer' : 'default'}
      >
        <>
          {renderCell ? (
            renderCell()
          ) : (
            <Body
              level={2}
              lineLimit={lineLimit}
              wordBreak={wordBreak}
              textAlign={textAlign}
              color={color}
              onCopy={handleCopyEvent}
            >
              {children}
            </Body>
          )}
        </>
      </PressableBox>
    );
  }
);
