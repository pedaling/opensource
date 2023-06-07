import { useCallback, useMemo, useRef } from 'react';
import type { EasingFunction } from 'react-native';
import type { AnimatableValue, EasingFunctionFactory } from 'react-native-reanimated';
import { Easing, runOnJS, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import type { AllSystemProps } from '@vibrant-ui/core';
import { useCurrentTheme, useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import type { ColorToken } from '@vibrant-ui/theme';
import type { EasingDictionary } from '../constants';
import type { TransformMotionProps } from '../props/transform';
import type { AnimationResult } from '../types';

type UseTransitionProps = {
  animation: AllSystemProps & TransformMotionProps;
  duration: number;
  easing: keyof EasingDictionary;
  onStart?: ((e?: AnimationResult<any>) => void) | undefined;
  onEnd?: ((e?: AnimationResult<any>) => void) | undefined;
};

const convertEasing: Record<keyof EasingDictionary, EasingFunction | EasingFunctionFactory> = {
  easeInQuad: Easing.in(Easing.ease),
  easeOutQuad: Easing.out(Easing.ease),
  linear: Easing.linear,
};

export const useTransition = ({ animation, duration = 200, easing, onStart, onEnd }: UseTransitionProps) => {
  const { getResponsiveValue } = useResponsiveValue();
  const {
    theme: { colors },
  } = useCurrentTheme();
  const { interpolation } = useInterpolation();

  const responsiveAnimation: AllSystemProps & TransformMotionProps = useMemo(
    () =>
      Object.entries(interpolation(animation)).reduce(
        (acc, [key, val]) => ({
          ...acc,
          [key]:
            key === 'transform'
              ? Object.fromEntries(
                  Object.entries(val).map(([transformKey, transformValue]) => [
                    transformKey,
                    getResponsiveValue(transformValue),
                  ])
                )
              : getResponsiveValue(val),
        }),
        {}
      ),
    [animation, getResponsiveValue, interpolation]
  );
  const isStarted = useRef(false);
  const initialAnimation = useRef(true);
  const onStartCallback = useCallback(() => {
    if (initialAnimation.current) {
      return;
    }

    if (!isStarted.current) {
      isStarted.current = true;

      onStart?.();
    }
  }, [onStart]);

  const onEndCallback = useCallback(() => {
    if (initialAnimation.current) {
      initialAnimation.current = false;

      return;
    }

    if (isStarted.current) {
      isStarted.current = false;

      onEnd?.();
    }
  }, [onEnd]);

  const timingAnimation = useCallback(
    (value: AnimatableValue, index: number, j = 0) => {
      'worklet';

      return withTiming(
        value,
        {
          duration,
          easing: convertEasing[easing],
        },
        () => {
          if (index === 0 && j === 0) {
            runOnJS(onEndCallback)();
          }
        }
      );
    },
    [duration, easing, onEndCallback]
  );
  const transition = useAnimatedStyle(() => {
    runOnJS(onStartCallback)();

    return Object.entries(responsiveAnimation).reduce((acc, [key, val], i) => {
      const value = key.match(/color/i)
        ? timingAnimation(colors[val as ColorToken], i, 0)
        : key === 'transform'
        ? Object.entries(val).map(([transformKey, transformValue], j) => ({
            [transformKey]: timingAnimation(transformValue as AnimatableValue, i, j),
          }))
        : timingAnimation(val, i, 0);

      return Object.assign({}, acc, {
        [key]: value,
      });
    }, {});
  }, [JSON.stringify(responsiveAnimation)]);

  return transition;
};
