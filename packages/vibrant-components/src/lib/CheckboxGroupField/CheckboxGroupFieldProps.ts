import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { DistributivePick } from '@vibrant-ui/utils';
import type { CheckboxFieldProps } from '../CheckboxField';

export type CheckboxFieldOption<Value extends string> = DistributivePick<
  CheckboxFieldProps,
  'helperText' | 'label' | 'renderContent'
> & {
  /**
   * A string representing the unique value of the `CheckboxField`.
   * This is not displayed on the client-side.
   */
  value: Value;
};

export type CheckboxGroupFieldProps<Value extends string, Options extends readonly CheckboxFieldOption<Value>[]> = {
  options: Options;
  defaultValue?: Record<Options[number]['value'], boolean>;
  /**
   * @default false
   */
  disabled?: boolean;
  /**
   * @default "md"
   */
  size?: CheckboxFieldProps['size'];
  /**
   * @default 16
   */
  spacing?: ResponsiveValue<8 | 16 | 24>;
  onValueChange?: (value: Record<Options[number]['value'], boolean>, info: { allChecked: boolean }) => void;
};

export const withCheckboxGroupFieldVariation =
  withVariation<CheckboxGroupFieldProps<string, CheckboxFieldOption<string>[]>>('CheckboxGroupField')();
