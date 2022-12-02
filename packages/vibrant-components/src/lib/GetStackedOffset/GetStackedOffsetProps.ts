import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';

type GetStackedOffsetProps = {
  position: 'bottom' | 'top';
  renderBeforeCalculate?: boolean;
  children: (_: { offset: number | string }) => ReactElement;
};

export const withGetStackedOffsetVariation = withVariation<GetStackedOffsetProps>('GetStackedOffset')();
