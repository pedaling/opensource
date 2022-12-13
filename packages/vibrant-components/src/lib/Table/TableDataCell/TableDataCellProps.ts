import type {
  BorderSystemProps,
  FlexboxSystemProps,
  ReactElementChildren,
  SizingSystemProps,
  TextChildren,
  TextProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { Either } from '@vibrant-ui/utils';

export type TableDataCellProps = Either<
  {
    children?: TextChildren;
  },
  {
    renderCell?: () => ReactElementChildren;
  }
> & {
  onClick?: () => void;
  bottomBordered?: boolean;
  alignVertical?: 'center' | 'end' | 'start';
  alignHorizontal?: 'center' | 'end' | 'start';
} & Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'> &
  Pick<TextProps, 'lineLimit' | 'textAlign' | 'wordBreak'> &
  BorderSystemProps;

export const withTableDataCellVariation = withVariation<TableDataCellProps>('TableDataCell')(
  propVariant({
    props: [
      {
        name: 'bottomBordered',
      },
    ],
    variants: {
      true: {
        borderBottomColor: 'outline1',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
      },
      false: {},
    },
  })
);
