import { withVariation } from '@vibrant-ui/core';
import type { ResourceListProps } from '../../ResourceList';
import type { ResourceItemProps } from '../../ResourceList/ResourceItemProps';
import type { TextFieldProps } from '../../TextField';
import type { MultiSelectFilterOperator, TableFilterRefValue } from '../types';

export type TableResourceSelectFilterProps = {
  ref?: (ref: any) => TableFilterRefValue;
  searchInputProps?: TextFieldProps;
  dataKey: string;
  label: string;
  placeholder?: string;
  operators?: MultiSelectFilterOperator[];
  defaultValue?: {
    value: string[];
    operator: MultiSelectFilterOperator;
  };
  children: React.ReactElement<ResourceItemProps>[];
  testId?: string;
} & ResourceListProps;

export const withTableResourceSelectFilterVariation =
  withVariation<TableResourceSelectFilterProps>('TableResourceSelectFilter')();
