import type { ComponentClass } from 'react';
import { useEffect, useImperativeHandle, useMemo } from 'react';
import Animated, { interpolate, interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import { useInterpolation } from '@vibrant-ui/core';
import { transformMotionProps } from '../props/transform';
import { useMotion } from '../useMotion';
import { withTransformStyle } from '../withTransformStyle';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(
  ({ innerRef, children, duration, loop, from, to, delay = 0, easing = 'easeOutQuad', onEnd }) => {
    const { interpolation } = useInterpolation(transformMotionProps);
    const { progress, startAnimation, stopAnimation, resumeAnimation } = useMotion({
      loop: Boolean(loop),
      duration,
      easing,
      onEnd,
      delay,
    });
    const styleWithTransform = useMemo(() => {
      const interpolationFrom = interpolation(from);
      const interpolationTo = interpolation(to);

      return withTransformStyle(
        Object.keys(interpolationTo).reduce<Record<string, [number, number]>>((acc, key) => {
          if (key === 'transform') {
            const value = interpolationFrom[key];
            const transformValue = value.map((transformStyle: Record<string, any>) =>
              Object.fromEntries(
                Object.entries(transformStyle).map(([transformKey], i) => [
                  transformKey,
                  [interpolationFrom[key][i][transformKey], interpolationTo[key][i][transformKey]],
                ])
              )
            );

            return {
              ...acc,
              [key]: transformValue,
            };
          }

          return {
            ...acc,
            [key]: [interpolationFrom[key], interpolationTo[key]],
          };
        }, {})
      );
    }, [from, interpolation, to]);

    const style = useAnimatedStyle(
      () =>
        Object.keys(styleWithTransform).reduce((acc, key) => {
          if (key === 'transform') {
            const transform = styleWithTransform['transform']?.map((transformStyle: Record<string, any>) => {
              const [[key, values]] = Object.entries(transformStyle) as [string, [number | string, number | string]][];
              const suffix = key === 'rotate' && typeof values[0] === 'string' ? 'deg' : '';
              const styleValues = (suffix ? values.map(a => parseInt(a as string)) : values) as [number, number];

              const interpolatedValue = suffix
                ? interpolate(progress.value, [0, 1], styleValues) + suffix
                : interpolate(progress.value, [0, 1], styleValues);

              return { [key]: interpolatedValue };
            });

            return Object.assign({}, acc, {
              [key]: transform,
            });
          }

          const value = key.match(/color/i)
            ? interpolateColor(progress.value, [0, 1], styleWithTransform[key], 'RGB')
            : interpolate(progress.value, [0, 1], styleWithTransform[key]);

          return Object.assign({}, acc, {
            [key]: value,
          });
        }, {}),
      [styleWithTransform]
    );

    useImperativeHandle(
      innerRef,
      () => ({
        start: () => {
          startAnimation();
        },
        pause: stopAnimation,
        stop: () => {},
        resume: resumeAnimation,
      }),
      [resumeAnimation, startAnimation, stopAnimation]
    );

    useEffect(() => {
      if (innerRef) {
        return;
      }

      startAnimation();
    }, [innerRef, loop, startAnimation]);

    const AnimatedViewComponent = useMemo(
      () => Animated.createAnimatedComponent(children.type as ComponentClass),
      [children.type]
    );

    return <AnimatedViewComponent {...children.props} style={style} />;
  }
);
