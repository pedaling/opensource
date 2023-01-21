import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { Filter } from '../TableFilter/type';

export type TableFilterGroupProps = {
  onFilterChange?: (filters: Filter[]) => void;
  initialFilterDataKeys?: string[];
  children: ReactElement<Filter>[];
};

export const withTableFilterGroupPropsVariation = withVariation<TableFilterGroupProps>('TableFilterGroup')();
