import { withVariation } from '@vibrant-ui/core';
import type { SelectOptionGroupProps } from '../SelectOptionGroup';

export type SelectFieldProps = Pick<SelectOptionGroupProps, 'options' | 'renderOption'> & {
  state?: 'default' | 'error';
  errorMessage?: string;
} & (
    | {
        label: string;
        inlineLabel?: boolean;
        placeholder?: never;
      }
    | {
        label?: never;
        inlineLabel?: never;
        placeholder: string;
      }
  );

export const withSelectFieldVariation = withVariation<SelectFieldProps>()();
