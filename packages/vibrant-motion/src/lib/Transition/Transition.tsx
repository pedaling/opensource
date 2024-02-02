import { cloneElement, useEffect, useMemo, useRef } from 'react';
import { useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import { useCallbackRef, useComposedRef } from '@vibrant-ui/utils';
import { timingFunctions } from '../constants/timingFunctions';
import { handleTransformStyle } from '../utils/handleTransformStyle';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(
  ({ innerRef, children, style = {}, animation, duration = 200, easing = 'easeOutQuad', onEnd }) => {
    const { useInterpolateStyle } = useInterpolation();

    const elementRef = useRef<HTMLElement>(null);
    const composedRef = useComposedRef(innerRef, elementRef);
    const { getResponsiveValue } = useResponsiveValue();
    const onEndRef = useCallbackRef(onEnd);
    const animationStyle = useInterpolateStyle(
      useMemo(
        () => Object.fromEntries(Object.entries(animation).map(([key, value]) => [key, getResponsiveValue(value)])),
        [animation, getResponsiveValue]
      )
    );

    useEffect(() => {
      if (!elementRef.current) {
        return;
      }

      const element = elementRef.current;

      element.addEventListener('transitionend', onEndRef);

      return () => element.removeEventListener('transitionend', onEndRef);
    }, [onEndRef]);

    const currentStyle = useInterpolateStyle(handleTransformStyle(style));
    const properties = Object.keys(animationStyle).join(',');

    return cloneElement(children, {
      ref: composedRef,
      style: {
        ...currentStyle,
        ...animationStyle,
        transitionProperty: properties,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: `cubic-bezier(${timingFunctions[easing].join(',')})`,
      },
    });
  }
);
