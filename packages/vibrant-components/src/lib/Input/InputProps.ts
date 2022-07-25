import type { ForwardedRef } from 'react';
import type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  DisplayProps,
  PositionProps,
  PseudoClassProps,
  SizingProps,
  SpacingProps,
  TypographyProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type BaseInputProps<Value> = {
  ref?: ForwardedRef<HTMLInputElement>;
  id?: string;
  defaultValue?: Value;
  disabled?: boolean;
  onValueChange?: (value: Value) => void;
  tabIndex?: number;
  placeholder?: Value;
};

export type InputProps = BackgroundProps & BaseInputProps<string> & BorderProps & ColorProps & DisplayProps & PositionProps & PseudoClassProps & SizingProps & SpacingProps & TypographyProps & {
  allowPattern?: RegExp;
  value?: string;
  readOnly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (_: { key: string; prevent: () => void }) => void;
} & | {
        type: 'number';
        min?: number;
        max?: number;
      }
    | {
        type?: 'text';
        maxLength?: number;
      };

export const withInputVariation = withVariation<InputProps>()(
  propVariant({
    props: [
      {
        name: 'allowPattern',
      },
    ],
    variants: ({ allowPattern }) => ({
      isValidValue: (value: string) => (allowPattern ? new RegExp(`^${allowPattern.source}*$`).test(value) : true),
      replaceValue: (value: string) =>
        allowPattern ? value.replace(new RegExp(`(?!(${allowPattern.source})).`, 'g'), '') : value,
    }),
  })
);
