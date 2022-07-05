import { propVariant, withVariation } from '@vibrant-ui/core';

type InputProps = {
  allowPattern?: RegExp;
  placeholder?: string;
  defaultValue?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyPress?: (_: { key: string; prevent: () => void }) => void;
  onValueChange?: (_: string) => void;
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
