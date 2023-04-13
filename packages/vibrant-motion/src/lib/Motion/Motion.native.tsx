import type { ComponentClass } from 'react';
import { useEffect, useImperativeHandle, useMemo } from 'react';
import Animated, { interpolate, interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import { useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import { transformMotionProps } from '../props/transform';
import type { AnimationOptions } from '../useAnimation';
import { useAnimation } from '../useAnimation';
import { withTransformStyle } from '../withTransformStyle';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(
  ({ innerRef, children, duration, loop, from, to, delay = 0, easing = 'easeOutQuad', onStart, onEnd }) => {
    const { interpolation } = useInterpolation(transformMotionProps);
    const { getResponsiveValue } = useResponsiveValue();
    const { progress, startAnimation, stopAnimation, resumeAnimation } = useAnimation({
      loop,
      duration,
      easing,
      onStart,
      onEnd,
      delay,
    });
    const styleWithTransform = useMemo(() => {
      const interpolationFrom = interpolation(from);
      const interpolationTo = interpolation(to);

      return withTransformStyle(
        Object.keys(interpolationTo).reduce<Record<string, [number, number]>>(
          (acc, key) => ({
            ...acc,
            [key]: [interpolationFrom[key], interpolationTo[key]],
          }),
          {}
        )
      );
    }, [from, interpolation, to]);

    const style = useAnimatedStyle(
      () =>
        Object.keys(styleWithTransform).reduce((acc, key) => {
          if (key === 'transform') {
            const tranform = styleWithTransform['transform']?.map((transformStyle: Record<string, any>) => {
              const [[key, value]] = Object.entries(transformStyle) as [string, [number, number]][];

              return { [key]: interpolate(progress.value, [0, 1], value) };
            });

            return {
              ...acc,
              [key]: tranform,
            };
          }

          const value = key.includes('Color')
            ? interpolateColor(progress.value, [0, 1], styleWithTransform[key], 'RGB')
            : interpolate(progress.value, [0, 1], styleWithTransform[key]);

          return {
            ...acc,
            [key]: value,
          };
        }, {}),
      [styleWithTransform]
    );

    useImperativeHandle(
      innerRef,
      () => ({
        start: (startOption: AnimationOptions) => {
          startAnimation(startOption);
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

      startAnimation({ reverse: loop === 'reverse' });
    }, [innerRef, loop, startAnimation]);

    const AnimatedViewComponent = useMemo(
      () => Animated.createAnimatedComponent(children.type as ComponentClass),
      [children.type]
    );

    return <AnimatedViewComponent {...children.props} style={style}></AnimatedViewComponent>;
  }
);
