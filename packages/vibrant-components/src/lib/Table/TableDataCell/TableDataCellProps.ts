import type {
  FlexboxSystemProps,
  ReactElementChildren,
  SizingSystemProps,
  TextChildren,
  TextProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type TableDataCellProps = {
  children?: TextChildren;
  renderCell?: () => ReactElementChildren;
  onClick?: () => void;
  onCopy?: () => void;
  alignVertical?: 'center' | 'flex-end' | 'flex-start';
  alignHorizontal?: 'center' | 'flex-end' | 'flex-start';
  disabled?: boolean;
  selected?: boolean;
} & Pick<FlexboxSystemProps, 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  Pick<SizingSystemProps, 'minWidth' | 'width'> &
  Pick<TextProps, 'lineLimit' | 'textAlign' | 'wordBreak'>;

export const withTableDataCellVariation = withVariation<TableDataCellProps>('TableDataCell')(
  propVariant({
    props: [{ name: 'disabled', default: false, keep: true }],
    variants: {
      true: {
        color: 'disable',
      },
      false: {
        color: 'onView1',
      },
    } as const,
  })
);
