import { propVariant, withVariation } from '@vibrant-ui/core';
import type { BaseInputProps } from '../../types';

export type UnstyledTextInputProps = BaseInputProps<string> & {
  autoFocus?: boolean;
  placeholder?: string;
  allowPattern?: RegExp;
  value?: string;
  readOnly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (_: { key: string; prevent: () => void }) => void;
  onSubmit?: (value: string) => void;
} & (
    | {
        type: 'number';
        min?: number;
        max?: number;
        maxLength?: never;
      }
    | {
        type?: 'text';
        min?: never;
        max?: never;
        maxLength?: number;
      }
  );

export const withUnstyledTextInputVariation = withVariation<UnstyledTextInputProps>('UnstyledTextInput')(
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
