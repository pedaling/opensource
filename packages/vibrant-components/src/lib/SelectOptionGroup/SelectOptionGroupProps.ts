import type { ReactElement } from 'react';
import type { DisplayProps, PositionProps, SizingProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SelectOptionGroupProps = DisplayProps &
  PositionProps &
  SizingProps & {
    focusIndex: number;
    onOptionClick: (index: number) => void;
    options: { label: string; value: string }[];
    state?: 'default' | 'error';
    reverse?: boolean;
    renderOption?: (index: number) => ReactElement;
  };

export const withSelectOptionGroupVariation = withVariation<SelectOptionGroupProps>()(
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
