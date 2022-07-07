import { withVariation } from '@vibrant-ui/core';
import type { StackProps } from '../Stack';

export type VStackProps = Omit<StackProps, 'direction' | 'alignItems'> & {
  alignment?: StackProps['alignItems'];
};

export const withVStackVariation = withVariation<VStackProps>()();
