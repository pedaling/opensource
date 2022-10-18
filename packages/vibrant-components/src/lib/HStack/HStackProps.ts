import { withVariation } from '@vibrant-ui/core';
import type { StackProps } from '../Stack';

export type HStackProps = Omit<StackProps, 'direction'> & {
  alignHorizontal?: StackProps['justifyContent'];
  alignVertical?: StackProps['alignItems'];
};

export const withHStackVariation = withVariation<HStackProps>('HStack')();
