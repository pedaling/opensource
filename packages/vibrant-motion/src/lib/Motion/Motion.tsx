import type { AnimationControls } from 'motion';
import { animate } from 'motion';
import { cloneElement, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import { useCallbackRef, useComposedRef } from '@vibrant-ui/utils';
import { timingFunctions } from '../constants/timingFunctions';
import { transformMotionProps } from '../props/transform';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(
  ({ innerRef, children, duration, animation, loop, delay, easing = 'easeOutQuad', onEnd }) => {
    const { interpolation } = useInterpolation(transformMotionProps);
    const elementRef = useRef();
    const animationRef = useRef<AnimationControls>();
    const ref = useComposedRef(innerRef, elementRef);
    const { getResponsiveValue } = useResponsiveValue();

    const getResponsiveValueRef = useCallbackRef(getResponsiveValue);
    const interpolationRef = useCallbackRef(interpolation);
    const onEndRef = useCallbackRef(onEnd);

    const keyframes = useMemo(
      () =>
        Object.entries(animation).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: [
              interpolationRef({ [key]: getResponsiveValueRef(value.from) })[key],
              interpolationRef({ [key]: getResponsiveValueRef(value.to) })[key],
            ],
          }),
          {}
        ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [JSON.stringify(animation), getResponsiveValueRef, interpolationRef]
    );

    useEffect(() => {
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
