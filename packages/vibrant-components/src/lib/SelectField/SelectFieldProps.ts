import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

export type SelectOption = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOption[];
  state?: 'default' | 'error';
  errorMessage?: string;
  renderItem?: (_: SelectOption) => ReactElement;
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
