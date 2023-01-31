import type { RefObject } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { StringFilterOperator, TableFilterRefValue } from '../types';

export type TableStringFilterProps = {
  ref?: RefObject<TableFilterRefValue>;
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
