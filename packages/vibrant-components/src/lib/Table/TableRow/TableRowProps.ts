import type { ReactElementChildren } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { CheckboxProps } from '../../Checkbox';
import { TableDataCell } from '../TableDataCell';
import { TableHeaderCell } from '../TableHeaderCell';

export type TableRowProps = {
  header?: boolean;
  selectable?: boolean;
  defaultSelected?: boolean;
  indeterminate?: boolean;
  onSelectionChange?: CheckboxProps['onValueChange'];
  expandable?: boolean;
  renderExpanded?: () => ReactElementChildren;
  children?: ReactElementChildren;
  bottomBordered?: boolean;
  onClick?: () => void;
};

export const withTableRowVariation = withVariation<TableRowProps>('TableRow')(
  propVariant({
    props: [
      {
        name: 'header',
        default: false,
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
  })
);
