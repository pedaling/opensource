import type { ReactElement } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { ResponsiveValue, TextSystemProps } from '@vibrant-ui/core';

export type SelectOptionGroupProps = {
  size?: ResponsiveValue<'lg' | 'md' | 'sm'>;
  focusIndex: number;
  onOptionClick: (value: string) => void;
  options: { label: string; value: string; disabled?: boolean }[];
  state?: 'default' | 'error';
  reverse?: boolean;
  renderOption?: (index: number) => ReactElement;
  textTransform?: TextSystemProps['textTransform'];
  testId?: string;
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
        borderColor: 'onViewError',
      },
    },
  })
);
