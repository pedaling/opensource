import { withVariation } from '@vibrant-ui/core';
import type { StackProps } from '../Stack';

export type VStackProps = Omit<StackProps, 'alignItems' | 'alignment' | 'direction'> & {
  alignHorizontal?: StackProps['alignment'];
  alignVertical?: StackProps['alignment'];
};

export const withVStackVariation = withVariation<VStackProps>('VStack')();
