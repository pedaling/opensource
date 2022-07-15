import type { ReactElement } from 'react';
import type { DisplayProps, PositionProps, SizingProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SelectOption = {
  label: string;
  value: string;
};

type SelectOptionGroupProps = {
  options: SelectOption[];
  focusIndex: number;
  onItemClick: (index: number) => void;
  state?: 'default' | 'error';
  renderItem?: (option: SelectOption) => ReactElement;
} & DisplayProps &
  PositionProps &
  SizingProps;

export const withSelectOptionGroupVariation = withVariation<SelectOptionGroupProps>()(
  propVariant({
    props: [
      {
        name: 'state',
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
