import type { ReactElement } from 'react';
import { withVariation } from '@vibrant-ui/core';
import { motionVariant } from '../motionVariant';
import type { AnimationStyle } from '../types';

type TransitionProps = {
  children: ReactElement;
  duration?: number;
  style: AnimationStyle;
};

export const withTransitionVariation = withVariation<TransitionProps>()(
  motionVariant({
    name: 'backgroundColor',
    scale: 'colors',
  }),
  motionVariant({
    name: 'borderColor',
    scale: 'colors',
  })
);
