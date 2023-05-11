import { withVariation } from '@vibrant-ui/core';
import type { TextFieldProps } from '../TextField';

export type SearchFieldProps = Omit<
  TextFieldProps,
  'autoCapitalize' | 'autoComplete' | 'prefix' | 'renderEnd' | 'renderStart' | 'suffix' | 'type'
>;

export const withSearchFieldVariation = withVariation<SearchFieldProps>('SearchField')();
