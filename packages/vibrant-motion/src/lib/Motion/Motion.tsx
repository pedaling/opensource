import { useEffect, useImperativeHandle, useMemo } from 'react';
import type { AnimationResult } from 'react-spring';
import { useResponsiveValue } from '@vibrant-ui/core';
import { useReactSpring } from '../useReactSpring';
import { withTransformStyle } from '../withTransformStyle';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(
  ({ innerRef, children, duration, loop, from, to, easing, onStart, onEnd }) => {
    const { animated, useSpring, easings } = useReactSpring();

    const AnimatedComponent = useMemo(
      () => (typeof children.type === 'string' ? animated[children.type as 'div'] : animated(children.type)),
      [animated, children.type]
    );
    const { getResponsiveValue } = useResponsiveValue();

    const [fromStyle, toStyle] = useMemo(
      () => [
        Object.fromEntries(Object.entries(from).map(([key, value]) => [key, getResponsiveValue(value)])),
        Object.fromEntries(Object.entries(to).map(([key, value]) => [key, getResponsiveValue(value)])),
      ],
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [JSON.stringify(from), JSON.stringify(to), getResponsiveValue]
    );

    const option = useMemo(
      () => ({
        from: fromStyle,
        to: toStyle,
        config: {
          duration,
          easing: easing && easings[easing],
        },
        loop,
        onStart,
        onRest: onEnd
          ? (result: AnimationResult) => {
              if (result.finished) {
                onEnd(result);
              }
            }
          : undefined,
      }),
      [duration, easing, easings, fromStyle, loop, onEnd, onStart, toStyle]
    );

    const [styles, springApi] = useSpring(() => ({
      from,
    }));

    useImperativeHandle(
      innerRef,
      () => ({
        start: (startOption = {}) => springApi.start({ ...option, ...startOption }),
        pause: () => springApi.pause(),
        stop: () => springApi.stop(),
        resume: () => springApi.resume(),
      }),
      [option, springApi]
    );

    useEffect(() => {
      if (innerRef) {
        return;
      }

      springApi.start(option);
    }, [innerRef, option, springApi]);

    return <AnimatedComponent style={withTransformStyle(styles)} {...children.props} />;
  }
);
