import type { ReactElement } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SelectOptionGroupProps = {
  focusIndex: number;
  onOptionClick: (index: number) => void;
  options: { label: string; value: string; disabled?: boolean }[];
  state?: 'default' | 'error';
  reverse?: boolean;
  renderOption?: (index: number) => ReactElement;
};

export const withSelectOptionGroupVariation = withVariation<SelectOptionGroupProps>('SelectOptionGroup')(
  propVariant({
    props: [
      {
        name: 'state',
        default: 'default',
      },
    ],
    variants: {
      default: {
        borderColor: 'outlineNeutral',
      },
      error: {
        borderColor: 'error',
      },
    },
  })
);
