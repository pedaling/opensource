import { animate } from 'motion';
import { cloneElement, useEffect, useMemo, useRef } from 'react';
import { useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import { useCallbackRef, useComposedRef } from '@vibrant-ui/utils';
import { timingFunctions } from '../constants/timingFunctions';
import { transformMotionProps } from '../props/transform';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(
  ({ innerRef, children, duration, animation, loop, delay, easing = 'easeOutQuad', onEnd }) => {
    const { interpolation } = useInterpolation(transformMotionProps);
    const elementRef = useRef();
    const ref = useComposedRef(innerRef, elementRef);
    const onEndRef = useCallbackRef(onEnd);

    const { getResponsiveValue } = useResponsiveValue();

    const keyframes = useMemo(
      () =>
        Object.entries(animation).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: [
              interpolation({ [key]: getResponsiveValue(value.from) })[key],
              interpolation({ [key]: getResponsiveValue(value.to) })[key],
            ],
          }),
          {}
        ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [JSON.stringify(animation), getResponsiveValue, interpolation]
    );

    useEffect(() => {
      if (!elementRef.current) {
        return;
      }

      animate(elementRef.current, keyframes, {
        duration: duration ? duration / 1000 : undefined,
        repeat: loop ? Infinity : 0,
        easing: timingFunctions[easing],
        delay: delay ? delay / 1000 : undefined,
      }).finished.then(() => {
        onEndRef?.();
      });
    }, [delay, duration, easing, keyframes, loop, onEndRef]);

    return cloneElement(children, {
      ref,
    });
  }
);
