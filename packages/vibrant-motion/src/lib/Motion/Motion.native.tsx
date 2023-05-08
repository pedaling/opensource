import { useEffect, useImperativeHandle, useMemo } from 'react';
import { useSpring } from '@react-spring/core';
import { useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import { useObjectMemo, useSafeDeps } from '@vibrant-ui/utils';
import { easings } from '../constants';
import { env } from '../constants/env';
import { transformMotionProps } from '../props/transform';
import { useReactSpring } from '../useReactSpring';
import { withTransformStyle } from '../withTransformStyle';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(
  ({ innerRef, children, duration, loop, from, to, delay, easing = 'easeOutQuad', onEnd }) => {
    const { interpolation } = useInterpolation(transformMotionProps);
    const { animated } = useReactSpring();
    const onEndRef = useSafeDeps(onEnd);

    const AnimatedComponent = useMemo(
      () => (typeof children.type === 'string' ? animated[children.type as 'div'] : animated(children.type)),
      [animated, children.type]
    );
    const { getResponsiveValue } = useResponsiveValue();

    const [fromStyle, toStyle] = useObjectMemo(
      useMemo(
        () => [
          interpolation(
            Object.fromEntries(Object.entries(from).map(([key, value]) => [key, getResponsiveValue(value)]))
          ),
          interpolation(Object.fromEntries(Object.entries(to).map(([key, value]) => [key, getResponsiveValue(value)]))),
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [JSON.stringify(from), JSON.stringify(to), getResponsiveValue, interpolation]
      )
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
        delay,
        onRest: () => {
          onEndRef.current?.();
        },
      }),
      [delay, duration, easing, fromStyle, loop, onEndRef, toStyle]
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

    return <AnimatedComponent style={withTransformStyle(env === 'test' ? option.to : styles)} {...children.props} />;
  }
);
