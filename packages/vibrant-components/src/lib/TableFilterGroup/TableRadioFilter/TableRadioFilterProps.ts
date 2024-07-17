import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { Option, RadioFilterOperator, TableFilterRefValue } from '../types';

export type TableRadioFilterProps = {
  ref?: (ref: any) => TableFilterRefValue;
  dataKey: string;
  label: string;
  options: Option[];
  operators?: RadioFilterOperator[];
  defaultValue?: {
    value?: Option['value'];
    operator: RadioFilterOperator;
  };
  maxWidth?: ResponsiveValue<number | string>;
  lineLimit?: ResponsiveValue<number>;
  testId?: string;
};

export const withTableRadioFilterVariation = withVariation<TableRadioFilterProps>('TableRadioFilter')();
