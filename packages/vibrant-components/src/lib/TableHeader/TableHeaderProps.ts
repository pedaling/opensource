import type { ReactElementChildren } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

export type TableHeaderProps = {
  children: ReactElementChildren;
};

export const withTableHeaderVariation = withVariation<TableHeaderProps>('TableHeader')();
