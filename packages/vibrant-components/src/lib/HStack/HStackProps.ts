import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { StackProps } from '../Stack';
import type { Alignment } from '../Stack/StackProps';

export type HStackProps = Omit<StackProps, 'alignHorizontal' | 'alignVertical' | 'direction'> & {
  alignHorizontal?: ResponsiveValue<Alignment>;
  alignVertical?: ResponsiveValue<Exclude<Alignment, 'space-between'>>;
};

export const withHStackVariation = withVariation<HStackProps>('HStack')();
