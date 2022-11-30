import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

type TableSearchFieldProps = BaseInputProps<string> & {
  autoFocus?: boolean;
  placeholder?: string;
  kind?: 'default' | 'transparent';
  onSubmit?: (value: string) => void;
  width: number;
};

export const withTableSearchFieldVariation = withVariation<TableSearchFieldProps>('TableSearchField')();
