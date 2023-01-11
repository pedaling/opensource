import { withVariation } from '@vibrant-ui/core';
import type { TextFieldProps } from '../TextField';

type BackdropProps = Omit<
  TextFieldProps,
  'autoCapitalize' | 'autoComplete' | 'prefix' | 'renderEnd' | 'suffix' | 'type'
>;

export const withCardNumberFieldVariation = withVariation<BackdropProps>('Backdrop')();
