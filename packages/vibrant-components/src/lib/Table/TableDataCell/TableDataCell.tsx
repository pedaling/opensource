import { PressableBox } from '@vibrant-ui/core';
import { Body } from '../../Body';
import { HStack } from '../../HStack';
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
    ...props
  }) =>
    onClick ? (
      <HStack as="td" minWidth={0} {...props}>
        <PressableBox as="button" py={12} px={16} width="100%" onClick={onClick}>
          <HStack as="span" width="100%" flex={1} alignHorizontal={alignHorizontal} alignVertical={alignVertical}>
            {renderCell ? (
              renderCell()
            ) : (
              <Body level={2} lineLimit={lineLimit} wordBreak={wordBreak} textAlign={textAlign}>
                {children}
              </Body>
            )}
          </HStack>
        </PressableBox>
      </HStack>
    ) : (
      <HStack
        as="td"
        py={12}
        px={16}
        alignHorizontal={alignHorizontal}
        alignVertical={alignVertical}
        minWidth={0}
        {...props}
      >
        {renderCell ? (
          renderCell()
        ) : (
          <Body level={2} lineLimit={lineLimit} wordBreak={wordBreak} textAlign={textAlign}>
            {children}
          </Body>
        )}
      </HStack>
    )
);
