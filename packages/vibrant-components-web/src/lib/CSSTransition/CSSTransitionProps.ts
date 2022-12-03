import type { ReactElement, Ref } from 'react';
import { withVariation } from '@vibrant-ui/core';

export const easings = {
  linear: 'linear',
  easeInQuad: 'ease-in-quad',
  easeOutQuad: 'ease-out-quad',
} as const;

type CSSTransitionProps = {
  ref?: Ref<any>;
  children: ReactElement;
  property?: string;
  duration?: number;
  easing?: keyof typeof easings;
};

export const withCSSTransitionVariation = withVariation<CSSTransitionProps>('CSSTransition')();
