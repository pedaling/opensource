import { withVariation } from '@vibrant-ui/core';
import type { StackProps } from '../Stack';

export type HStackProps = Omit<StackProps, 'alignment' | 'direction' | 'justifyContent'> & {
  alignHorizontal?: StackProps['alignment'];
  alignVertical?: StackProps['alignment'];
};

export const withHStackVariation = withVariation<HStackProps>('HStack')();
