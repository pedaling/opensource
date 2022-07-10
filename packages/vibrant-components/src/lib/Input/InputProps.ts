import type { RefObject } from 'react';
import type { DisplayProps, SizingProps, PositionProps, BorderProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type InputProps = {
  ref?: RefObject<HTMLInputElement>;
  id?: string;
  allowPattern?: RegExp;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  tabIndex?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (_: { key: string; prevent: () => void }) => void;
  onValueChange?: (_: string) => void;
} & BorderProps &
  DisplayProps &
  PositionProps &
  SizingProps;

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
