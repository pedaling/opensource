import { withVariation } from '@vibrant-ui/core';
import type { StackProps } from '../Stack';

export type VStackProps = Omit<StackProps, 'direction'> & {
  alignHorizontal?: StackProps['alignItems'];
  alignVertical?: StackProps['justifyContent'];
};

export const withVStackVariation = withVariation<VStackProps>('VStack')();
