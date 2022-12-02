import type { ReactElement } from 'react';
import type { ResponsiveValue } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';

type StackedItemProps = {
  id: string;
  order: number;
  position: 'bottom' | 'top';
  height?: ResponsiveValue<number>;
  renderBeforeCalculate?: boolean;
  children: (_: { offset: number | string; setHeight: (height: number) => void }) => ReactElement;
};

export const withStackedItemVariation = withVariation<StackedItemProps>('StackedItem')();
