import type { AnimationControls } from 'motion';
import { animate } from 'motion';
import { cloneElement, useImperativeHandle, useMemo, useRef } from 'react';
import { useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import { useCallbackRef, useComposedRef, useIsomorphicLayoutEffect } from '@vibrant-ui/utils';
import { timingFunctions } from '../constants/timingFunctions';
import { handleTransformStyle } from '../utils/handleTransformStyle';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(
  ({ innerRef, children, duration, from, to, loop, delay, easing = 'easeOutQuad', onEnd }) => {
    const { interpolation } = useInterpolation();
    const elementRef = useRef();
    const animationRef = useRef<AnimationControls>();
    const ref = useComposedRef(innerRef, elementRef);
    const { getResponsiveValue } = useResponsiveValue();

    const getResponsiveValueRef = useCallbackRef(getResponsiveValue);
    const interpolationRef = useCallbackRef(interpolation);
    const onEndRef = useCallbackRef(onEnd);

    const keyframes = useMemo(
      () => {
        const fromStyle = interpolation(
          Object.fromEntries(Object.entries(from).map(([key, value]) => [key, getResponsiveValue(value)]))
        );

        const toStyle = handleTransformStyle(
          interpolation(Object.fromEntries(Object.entries(to).map(([key, value]) => [key, getResponsiveValue(value)])))
        );

        return Object.fromEntries(
          Object.entries(fromStyle).map(([property]) => [property, [fromStyle[property], toStyle[property]]])
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [JSON.stringify(from), JSON.stringify(to), getResponsiveValueRef, interpolationRef]
    );

    useIsomorphicLayoutEffect(() => {
      if (!elementRef.current) {
        return;
      }

      animationRef.current = animate(elementRef.current, keyframes, {
        duration: duration ? duration / 1000 : undefined,
        repeat: loop ? Infinity : 0,
        easing: timingFunctions[easing],
        delay: delay ? delay / 1000 : undefined,
      });

      animationRef.current.finished.then(() => onEndRef?.());
    }, [delay, duration, easing, innerRef, keyframes, loop, onEndRef]);

    useImperativeHandle(
      innerRef,
      () => ({
        start: () => animationRef.current?.play(),
        pause: () => animationRef.current?.pause(),
        stop: () => animationRef.current?.stop(),
        resume: () => animationRef.current?.play(),
      }),
      []
    );

    return cloneElement(children, {
      ref,
    });
  }
);
