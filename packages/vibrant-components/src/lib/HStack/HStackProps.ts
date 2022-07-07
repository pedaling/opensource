import { withVariation } from '@vibrant-ui/core';
import type { StackProps } from '../Stack';

export type HStackProps = Omit<StackProps, 'direction' | 'justifyContent'> & {
  alignment?: StackProps['justifyContent'];
};

export const withHStackVariation = withVariation<HStackProps>()();
