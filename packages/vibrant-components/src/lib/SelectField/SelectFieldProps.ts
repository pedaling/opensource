import type { RefObject } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { TextSystemProps } from '@vibrant-ui/core';
import type { SelectOptionGroupProps } from '../SelectOptionGroup';

export type SelectFieldRefValue = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  isFocused: () => void;
};

export type SelectFieldProps = Pick<SelectOptionGroupProps, 'options' | 'renderOption'> & {
  ref?: RefObject<SelectFieldRefValue>;
  state?: 'default' | 'error';
  helperText?: string;
  disabled?: boolean;
  defaultValue?: string;
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
  })
);
