import type { OnColorToken } from '@vibrant-ui/theme';
import type { ResponsiveValue } from '../../../types';

export type InputSystemProps = {
  placeholderColor?: ResponsiveValue<OnColorToken>;
  hideInputSpinButton?: ResponsiveValue<boolean>;
};
