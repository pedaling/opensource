import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { StackProps } from '../Stack';
import type { Alignment } from '../Stack/StackProps';

export type VStackProps = Omit<StackProps, 'alignHorizontal' | 'alignVertical' | 'direction'> & {
  alignHorizontal?: ResponsiveValue<Exclude<Alignment, 'space-between'>>;
  alignVertical?: ResponsiveValue<Exclude<Alignment, 'stretch'>>;
};

export const withVStackVariation = withVariation<VStackProps>('VStack')();
