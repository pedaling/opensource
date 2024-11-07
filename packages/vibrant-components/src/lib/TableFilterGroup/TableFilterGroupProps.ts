import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import type { TableDateFilterProps } from './TableDateFilter';
import type { TableMultiSelectFilterProps } from './TableMultiSelectFilter';
import type { TableRadioFilterProps } from './TableRadioFilter';
import type { TableStringFilterProps } from './TableStringFilter';
import type { Filter } from './types';

export type TableFilterGroupProps = {
  onFilterChange?: (filters: Filter[]) => void;
  initialFilterDataKeys?: string[];
  testId?: string;
  children:
    | ReactElement<
        TableDateFilterProps | TableMultiSelectFilterProps | TableRadioFilterProps | TableStringFilterProps
      >[]
    | ReactElement<TableDateFilterProps | TableMultiSelectFilterProps | TableRadioFilterProps | TableStringFilterProps>;
};

export const withTableFilterGroupPropsVariation = withVariation<TableFilterGroupProps>('TableFilterGroup')();
