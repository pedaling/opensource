import type { RefObject } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { ResponsiveValue, TextSystemProps } from '@vibrant-ui/core';
import type { SelectOptionGroupProps } from '../SelectOptionGroup';

export type SelectFieldRefValue = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  isFocused: () => void;
};

export type SelectFieldProps = Pick<SelectOptionGroupProps, 'options' | 'renderOption' | 'size'> & {
  ref?: RefObject<SelectFieldRefValue>;
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
  state?: 'default' | 'error';
  helperText?: string;
  disabled?: boolean;
  value?: string;
  onValueChange?: (value?: string) => void;
  onOpen?: () => void;
  zIndex?: number;
  testId?: string;
  optionTextTransform?: TextSystemProps['textTransform'];
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

export const withSelectFieldVariation = withVariation<SelectFieldProps>('SelectField')(
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
  }),
  propVariant({
    props: [
      {
        name: 'size',
        default: 'lg',
        responsive: true,
        keep: true,
      },
    ],
    variants: {
      lg: {
        height: 50,
        px: 16,
        bodyLevel: 2,
        helperTextBodyLevel: 4,
        helperTextSpacing: 4,
        optionsOffset: 56,
        iconSize: 20,
        iconSpacing: 12,
      },
      md: {
        height: 38,
        px: 9,
        bodyLevel: 2,
        helperTextBodyLevel: 4,
        helperTextSpacing: 4,
        optionsOffset: 42,
        iconSize: 20,
        iconSpacing: 8,
      },
      sm: {
        height: 30,
        px: 7,
        bodyLevel: 4,
        helperTextBodyLevel: 5,
        helperTextSpacing: 2,
        optionsOffset: 32,
        iconSize: 16,
        iconSpacing: 6,
      },
    } as const,
  })
);
