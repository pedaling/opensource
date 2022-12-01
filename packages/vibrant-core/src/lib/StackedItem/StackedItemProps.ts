import type { ReactElement } from 'react';
import type { ResponsiveValue } from '../../types';
import { withVariation } from '../withVariation';

type StackedItemProps = {
  id: string;
  order: number;
  position: 'bottom' | 'top';
  height?: ResponsiveValue<number>;
  renderBeforeCalculate?: boolean;
  children: (_: { offset: number | string; setHeight: (height: number) => void }) => ReactElement;
};

export const withStackedItemVariation = withVariation<StackedItemProps>('StackedItem')();
