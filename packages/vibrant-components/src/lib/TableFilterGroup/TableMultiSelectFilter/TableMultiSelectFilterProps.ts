import type { RefObject } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { MultiSelectFilterOperator, Option, TableFilterRefValue } from '../types';

export type TableMultiSelectFilterProps = {
  ref?: RefObject<TableFilterRefValue>;
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
