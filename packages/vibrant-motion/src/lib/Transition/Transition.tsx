import { cloneElement, useEffect, useMemo, useRef, useState } from 'react';
import { useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import { useCallbackRef, useComposedRef } from '@vibrant-ui/utils';
import { timingFunctions } from '../constants/timingFunctions';
import { transformMotionProps } from '../props/transform';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(
  ({ innerRef, children, style, animation, duration = 200, easing = 'easeOutQuad', onEnd }) => {
    const { interpolation } = useInterpolation(transformMotionProps);

    const elementRef = useRef<HTMLElement>(null);
    const composedRef = useComposedRef(innerRef, elementRef);
    const interpolationRef = useCallbackRef(interpolation);
    const { getResponsiveValue } = useResponsiveValue();
    const [animationStyle, setAnimationStyle] = useState(
      interpolation(
        Object.fromEntries(Object.entries(animation).map(([key, value]) => [key, getResponsiveValue(value)]))
      )
    );

    useEffect(() => {
      requestAnimationFrame(() =>
        setAnimationStyle(
          interpolationRef(
            Object.fromEntries(Object.entries(animation).map(([key, value]) => [key, getResponsiveValue(value)]))
          )
        )
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(animation), interpolationRef]);

    const currentStyle = useMemo(() => interpolation(style), [style, interpolation]);
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
