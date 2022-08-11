import type { ReactElement, Ref } from 'react';
import type { easings } from 'react-spring';
import { withVariation } from '@vibrant-ui/core';
import { motionVariant } from '../motionVariant';
import type { AnimationStyle } from '../types';

type TransitionProps = {
  children: ReactElement;
  duration?: number;
  animation: AnimationStyle;
  easing?: keyof typeof easings;
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
