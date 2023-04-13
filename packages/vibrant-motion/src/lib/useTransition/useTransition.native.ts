import { useCallback, useRef } from 'react';
import type { EasingFunction } from 'react-native';
import type { AnimatableValue, EasingFunctionFactory } from 'react-native-reanimated';
import { Easing, runOnJS, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import type { AllSystemProps } from '@vibrant-ui/core';
import { useResponsiveValue } from '@vibrant-ui/core';
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
        getResponsiveValue(value),
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
    [duration, easing, getResponsiveValue, onEndCallback]
  );
  const transition = useAnimatedStyle(() => {
    runOnJS(onStartCallback)();

    return Object.entries(animation).reduce((acc, [key, val], i) => {
      const value =
        key === 'transform'
          ? Object.entries(val).map(([transformKey, transformValue], j) => ({
              [transformKey]: timingAnimation(transformValue as AnimatableValue, i, j),
            }))
          : timingAnimation(val, i, 0);

      return {
        ...acc,
        [key]: value,
      };
    }, {});
  }, [JSON.stringify(animation)]);

  return transition;
};
