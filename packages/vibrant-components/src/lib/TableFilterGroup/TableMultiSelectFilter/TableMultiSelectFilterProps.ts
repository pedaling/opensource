import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { MultiSelectFilterOperator, Option, TableFilterRefValue } from '../types';

export type TableMultiSelectFilterProps = {
  ref?: (ref: any) => TableFilterRefValue;
  dataKey: string;
  label: string;
  options: Option[];
  operators?: MultiSelectFilterOperator[];
  defaultValue?: {
    value: Option['value'][];
    operator: MultiSelectFilterOperator;
  };
  maxWidth?: ResponsiveValue<number | string>;
  lineLimit?: ResponsiveValue<number>;
  testId?: string;
};

export const withTableMultiSelectFilterVariation =
  withVariation<TableMultiSelectFilterProps>('TableMultiSelectFilter')();
