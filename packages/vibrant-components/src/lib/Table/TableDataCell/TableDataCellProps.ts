import type {
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
  alignVertical?: 'center' | 'end' | 'start';
  alignHorizontal?: 'center' | 'end' | 'start';
} & Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<SizingSystemProps, 'maxWidth' | 'minWidth' | 'width'> &
  Pick<TextProps, 'lineLimit' | 'wordBreak'>;

export const withTableDataCellVariation = withVariation<TableDataCellProps>('TableDataCell')(
  propVariant({
    props: [
      {
        name: 'alignHorizontal',
        default: 'center',
        keep: true,
      },
    ],
    variants: {
      start: {
        textAlign: 'left' as const,
      },
      center: {
        textAlign: 'center' as const,
      },
      end: {
        textAlign: 'right' as const,
      },
    },
  })
);
