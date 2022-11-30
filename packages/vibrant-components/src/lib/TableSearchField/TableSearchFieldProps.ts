import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

type TableSearchFieldProps = BaseInputProps<string> & {
  autoFocus?: boolean;
  placeholder?: string;
  onSubmit?: (value: string) => void;
  width: number;
};

export const withTableSearchFieldVariation = withVariation<TableSearchFieldProps>('TableSearchField')();
