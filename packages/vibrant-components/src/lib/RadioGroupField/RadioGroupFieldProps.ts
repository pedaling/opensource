import type { ReactElementChildren, ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type RadioGroupFieldProps = {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (_: { value: string }) => void;
  disabled?: boolean;
  size?: ResponsiveValue<'md' | 'sm'>;
  state?: 'default' | 'error';
  children: ReactElementChildren;
};

export const withRadioGroupFieldVariation = withVariation<RadioGroupFieldProps>('RadioGroupField')();
