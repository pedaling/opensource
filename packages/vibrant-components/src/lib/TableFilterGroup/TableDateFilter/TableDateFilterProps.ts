import type { RefObject } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { DateFilterOperator, TableFilterRefValue } from '../types';

export type TableDateFilterProps = {
  ref?: RefObject<TableFilterRefValue>;
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
