import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { Alignment, StackProps } from '../Stack';

export type HStackProps = Omit<StackProps, 'alignHorizontal' | 'alignVertical' | 'direction'> & {
  alignHorizontal?: ResponsiveValue<Exclude<Alignment, 'stretch'>>;
  alignVertical?: ResponsiveValue<Exclude<Alignment, 'space-between'>>;
};

export const withHStackVariation = withVariation<HStackProps>('HStack')();
