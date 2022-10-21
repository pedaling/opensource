import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { Alignment, StackProps } from '../Stack';

export type VStackProps = Omit<StackProps, 'alignHorizontal' | 'alignVertical' | 'direction'> & {
  alignHorizontal?: ResponsiveValue<Exclude<Alignment, 'space-between'>>;
  alignVertical?: ResponsiveValue<Exclude<Alignment, 'stretch'>>;
};

export const withVStackVariation = withVariation<VStackProps>('VStack')();
