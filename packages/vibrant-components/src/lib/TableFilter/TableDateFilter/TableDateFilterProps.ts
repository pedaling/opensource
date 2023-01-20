import { withVariation } from '@vibrant-ui/core';
import type { DateFilterOperator } from '../type';

export type TableDateFilterProps = {
  dataKey: string;
  label: string;
  placeholder?: string;
  operators?: DateFilterOperator[];
  defaultValue?: {
    value: Date[];
    operator: DateFilterOperator;
  };
};

export const withTableDateFilterVariation = withVariation<TableDateFilterProps>('TableDateFilter')();
