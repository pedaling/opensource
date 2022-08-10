import { withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

type SearchInputProps = BaseInputProps<string> & {
  autoFocus?: boolean;
  placeholder?: string;
  onSubmit?: (value: string) => void;
};

export const withSearchInputVariation = withVariation<SearchInputProps>('SearchInput')();
