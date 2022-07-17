import type { ReactElement } from 'react';
import type { DisplayProps, PositionProps, SizingProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';

export type SelectOptionGroupProps = {
  focusIndex: number;
  onItemClick: (index: number) => void;
  options: { label: string; value: string }[];
  state?: 'default' | 'error';
  renderItem?: (index: number) => ReactElement;
} & DisplayProps &
  PositionProps &
  SizingProps;

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
