import type { ReactElementChild, ReactElementChildren } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { CheckboxProps } from '../../Checkbox';
import { TableDataCell } from '../TableDataCell';
import { TableHeaderCell } from '../TableHeaderCell';

export type TableRowProps = {
  header?: boolean;
  selectable?: boolean;
  selected?: boolean;
  indeterminate?: boolean;
  onSelectionChange?: CheckboxProps['onValueChange'];
  expandable?: boolean;
  expanded?: boolean;
  renderExpanded?: () => ReactElementChild;
  children?: ReactElementChildren;
  bottomBordered?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export const withTableRowVariation = withVariation<TableRowProps>('TableRow')(
  propVariant({
    props: [
      {
        name: 'header',
        default: false,
        keep: true,
      },
    ],
    variants: {
      true: {
        TableCellComponent: TableHeaderCell,
      },
      false: {
        TableCellComponent: TableDataCell,
      },
    },
  }),
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
      false: {
        borderBottomColor: undefined,
        borderBottomWidth: 0,
        borderBottomStyle: undefined,
      },
    } as const,
  })
);
