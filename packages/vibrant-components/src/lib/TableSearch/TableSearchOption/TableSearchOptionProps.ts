import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type TableSearchOptionProps = {
  testId?: string;
  options: {
    label: string;
    value: string;
  }[];
  defaultOption?: string;
  width?: ResponsiveValue<number | string>;
};

export const withTableSearchOptionVariation = withVariation<TableSearchOptionProps>('TableSearchOption')();
