import { cloneElement, useEffect, useMemo, useRef } from 'react';
import { useInterpolation } from '@vibrant-ui/core';
import { useCallbackRef, useComposedRef } from '@vibrant-ui/utils';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(
  ({ innerRef, children, style, animation, duration = 200, easing = 'easeOutQuad', onEnd }) => {
    const { interpolation } = useInterpolation();

    const elementRef = useRef<HTMLElement>(null);
    const composedRef = useComposedRef(innerRef, elementRef);
    const onEndRef = useCallbackRef(onEnd);

    useEffect(() => {
      elementRef.current?.addEventListener('transitionend', () => {
        onEndRef?.();
      });
    }, [onEndRef]);

    const animationStyle = useMemo(() => interpolation(animation), [animation, interpolation]);
    const currentStyle = useMemo(() => interpolation(style), [style, interpolation]);

    const properties = Object.keys(animationStyle).join(',');

    return cloneElement(children, {
      ref: composedRef,
      style: {
        ...currentStyle,
        ...animationStyle,
        transitionProperty: properties,
        transitionDuration: `${duration}ms`,
      },
    });
  }
);
