import { Body } from '../../Body';
import { VStack } from '../../VStack';
import { withTableDataCellVariation } from './TableDataCellProps';

export const TableDataCell = withTableDataCellVariation(
  ({
    children,
    lineLimit,
    wordBreak,
    renderCell,
    alignHorizontal = 'center',
    alignVertical = 'center',
    textAlign,
    ...props
  }) => (
    <VStack
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
        <Body level={2} lineLimit={lineLimit} wordBreak={wordBreak} textAlign={textAlign} width="100%">
          {children}
        </Body>
      )}
    </VStack>
  )
);
