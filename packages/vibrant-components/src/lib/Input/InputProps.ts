import type { ForwardedRef } from 'react';
import type {
  DisplayProps,
  SizingProps,
  PositionProps,
  BorderProps,
  SpacingProps,
  TypographyProps,
  PseudoClassProps,
  ColorProps,
} from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type BaseInputProps<Value> = {
  ref?: ForwardedRef<HTMLInputElement>;
  id?: string;
  defaultValue?: Value;
  disabled?: boolean;
  onValueChange?: (value: Value) => void;
  tabIndex?: number;
};

export type InputProps = BaseInputProps<any> & {
  allowPattern?: RegExp;
  placeholder?: string;
  readOnly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (_: { key: string; prevent: () => void }) => void;
} & BorderProps &
  DisplayProps &
  PositionProps &
  SpacingProps &
  SizingProps &
  TypographyProps &
  PseudoClassProps &
  ColorProps &
  (
    | {
        type: 'number';
        min?: number;
        max?: number;
      }
    | {
        type?: 'text';
        maxLength?: number;
      }
  );

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
