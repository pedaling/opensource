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
  testId?: string;
};

export const withTableMultiSelectFilterVariation =
  withVariation<TableMultiSelectFilterProps>('TableMultiSelectFilter')();
