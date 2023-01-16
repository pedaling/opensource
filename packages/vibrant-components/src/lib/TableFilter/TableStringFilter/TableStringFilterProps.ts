import { withVariation } from '@vibrant-ui/core';
import type { StringFilterOperator } from '../type';

export type TableStringFilterProps = {
  dataKey: string;
  label: string;
  placeholder?: string;
  operators?: StringFilterOperator[];
  defaultValue?: {
    value: string;
    operator: StringFilterOperator;
  };
};

export const withTableStringFilterVariation = withVariation<TableStringFilterProps>('TableStringFilter')();
