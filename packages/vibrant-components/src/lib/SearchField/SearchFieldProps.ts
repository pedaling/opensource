import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

type SearchFieldProps = BaseInputProps<string> & {
  autoFocus?: boolean;
  placeholder?: string;
  kind?: 'default' | 'transparent';
  onSubmit?: (value: string) => void;
};

export const withSearchFieldVariation = withVariation<SearchFieldProps>('SearchField')();
