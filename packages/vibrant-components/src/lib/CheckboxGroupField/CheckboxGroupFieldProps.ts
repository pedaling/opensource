import type { ReactElement, ReactNode } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { CheckboxFieldProps } from '../CheckboxField';

type CheckboxFieldOption = {
  label: CheckboxFieldProps['label'];
  /**
   * A string representing the unique value of the `CheckboxField`.
   * This is not displayed on the client-side.
   */
  value: string;
  helperText?: CheckboxFieldProps['helperText'];
};

type RenderItemOption = CheckboxFieldOption & {
  checkboxFieldElement: ReactElement<CheckboxFieldProps>;
  isChecked: boolean;
};

type CheckboxGroupFieldProps = {
  options: CheckboxFieldOption[];
  /**
   * @default []
   */
  defaultValue?: string[];
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
  spacing?: ResponsiveValue<number>;
  /**
   * @default ({ checkboxFieldElement }) => checkboxFieldElement
   */
  renderItem?: (option: RenderItemOption) => ReactNode;
  onValueChange?: (value: string[]) => void;
};

export const withCheckboxGroupFieldVariation = withVariation<CheckboxGroupFieldProps>('CheckboxGroupField')();
