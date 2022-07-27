import { propVariant, withVariation } from '@vibrant-ui/core';
import type { SelectOptionGroupProps } from '../SelectOptionGroup';

export type SelectFieldProps = Pick<SelectOptionGroupProps, 'options' | 'renderOption'> & {
  state?: 'default' | 'error';
  helperText?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
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

export const withSelectFieldVariation = withVariation<SelectFieldProps>()(
  propVariant({
    props: [
      {
        name: 'disabled',
        default: false,
        keep: true,
      },
    ],
    variants: {
      true: {
        backgroundColor: 'disable',
      },
      false: {
        backgroundColor: 'surface3',
      },
    } as const,
  })
);
