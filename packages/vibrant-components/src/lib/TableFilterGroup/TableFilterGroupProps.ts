import { withVariation } from '@vibrant-ui/core';
import type { Filter } from '../TableFilter/type';

export type TableFilterGroupProps = {
  onFilterChange?: (filters: Filter[]) => void;
  initialFilter?: Filter[];
};

export const withTableFilterGroupPropsVariation = withVariation<TableFilterGroupProps>('TableFilterGroup')();
