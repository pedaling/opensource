import type { Property } from 'csstype';
import type { ReactElement, Ref } from 'react';
import { withVariation } from '@vibrant-ui/core';

type CSSTransitionProps = {
  ref?: Ref<any>;
  children: ReactElement;
  property?: string;
  duration?: number;
  easing?: Property.AnimationTimingFunction;
};

export const withCSSTransitionVariation = withVariation<CSSTransitionProps>('CSSTransition')();
