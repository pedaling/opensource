import { withVariation } from '@vibrant-ui/core';
import type { StringFilterOperator, TableFilterRefValue } from '../types';

export type TableStringFilterProps = {
  ref?: (ref: any) => TableFilterRefValue;
  dataKey: string;
  label: string;
  placeholder?: string;
  operators?: StringFilterOperator[];
  defaultValue?: {
    value: string;
    operator: StringFilterOperator;
  };
  testId?: string;
};

export const withTableStringFilterVariation = withVariation<TableStringFilterProps>('TableStringFilter')();
