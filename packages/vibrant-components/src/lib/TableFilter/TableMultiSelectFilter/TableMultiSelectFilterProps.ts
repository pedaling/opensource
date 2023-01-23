import { withVariation } from '@vibrant-ui/core';
import type { MultiSelectFilterOperator, Option } from '../type';

export type TableMultiSelectFilterProps = {
  dataKey: string;
  label: string;
  options: Option[];
  operators?: MultiSelectFilterOperator[];
  defaultValue?: {
    value: Option['value'][];
    operator: MultiSelectFilterOperator;
  };
};

export const withTableMultiSelectFilterVariation =
  withVariation<TableMultiSelectFilterProps>('TableMultiSelectFilter')();
