import { cloneElement } from 'react';
import { withCSSTransitionVariation } from './CSSTransitionProps';

/**
 * web 에서만 사용가능한 컴포넌트입니다.
 * 웬만하면 `@vibrant-ui/motion`의 `Transition`을 사용해주세요.
 * */
export const CSSTransition = withCSSTransitionVariation(
  ({ innerRef, children, property, duration, easing = 'easeOutQuad' }) =>
    cloneElement(children, {
      ref: innerRef,
      style: {
        transitionProperty: property,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
      },
    })
);
