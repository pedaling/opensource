import type { ReactElement, Ref } from 'react';
import { withVariation } from '@vibrant-ui/core';
import { motionVariant } from '../motionVariant';
import type { AnimationStyle } from '../types';

type TransitionProps = {
  children: ReactElement;
  duration?: number;
  animation: AnimationStyle;
  style?: any;
  ref?: Ref<any>;
};

export const withTransitionVariation = withVariation<TransitionProps>('Transition')(
  motionVariant({
    name: 'backgroundColor',
    scale: 'colors',
  }),
  motionVariant({
    name: 'borderColor',
    scale: 'colors',
  }),
  motionVariant({
    name: 'opacity',
    scale: 'opacity',
  })
);
