import { useEffect, useImperativeHandle, useMemo } from 'react';
import { useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import { easings } from '../constants/EasingDictionary';
import { transformMotionProps } from '../props/transform';
import { useReactSpring } from '../useReactSpring';
import { withTransformStyle } from '../withTransformStyle';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(({ innerRef, children, duration, loop, from, to, easing }) => {
  const { interpolation } = useInterpolation(transformMotionProps);
  const { animated, useSpring } = useReactSpring();

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
      from: interpolation(fromStyle),
      to: interpolation(toStyle),
      config: {
        duration,
        easing: easing && easings[easing],
      },
      loop,
    }),
    [duration, easing, fromStyle, interpolation, loop, toStyle]
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
});
