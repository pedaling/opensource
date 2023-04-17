import type { ReactElementChildren, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type RadioGroupFieldProps = {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: ResponsiveValue<'md' | 'sm'>;
  children: ReactElementChildren;
};

export const withRadioGroupFieldVariation = withVariation<RadioGroupFieldProps>('RadioGroupField')();
