import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { TableDateFilterProps } from './TableDateFilter';
import type { TableMultiSelectFilterProps } from './TableMultiSelectFilter';
import type { TableStringFilterProps } from './TableStringFilter';
import type { Filter } from './types';

export type TableFilterGroupProps = {
  onFilterChange?: (filters: Filter[]) => void;
  initialFilterDataKeys?: string[];
  children:
    | ReactElement<TableDateFilterProps | TableMultiSelectFilterProps | TableStringFilterProps>
    | ReactElement<TableDateFilterProps | TableMultiSelectFilterProps | TableStringFilterProps>[];
};

export const withTableFilterGroupPropsVariation = withVariation<TableFilterGroupProps>('TableFilterGroup')();
