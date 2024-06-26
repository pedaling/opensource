import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type TableSearchFieldProps = {
  testId?: string;
  defaultValue?: string;
  placeholder?: string;
  maxWidth?: ResponsiveValue<number | string>;
};

export const withTableSearchFieldVariation = withVariation<TableSearchFieldProps>('TableSearchField')();
