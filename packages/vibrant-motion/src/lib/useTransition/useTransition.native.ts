import { useCallback, useMemo, useRef } from 'react';
import type { EasingFunction } from 'react-native';
import type { AnimatableValue, EasingFunctionFactory } from 'react-native-reanimated';
import { Easing, runOnJS, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import type { AllSystemProps } from '@vibrant-ui/core';
import { useInterpolation } from '@vibrant-ui/core';
import type { EasingDictionary } from '../constants';
import type { TransformMotionProps } from '../props/transform';
import { transformMotionProps } from '../props/transform';
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
  const { interpolation } = useInterpolation(transformMotionProps);

  const animationStyle: AllSystemProps & TransformMotionProps = useMemo(
    () => interpolation(animation),
    [animation, interpolation]
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
    (value: AnimatableValue, callbackFlag: boolean) => {
      'worklet';

      return withTiming(
        value,
        {
          duration,
          easing: convertEasing[easing],
        },
        () => {
          if (callbackFlag) {
            runOnJS(onEndCallback)();
          }
        }
      );
    },
    [duration, easing, onEndCallback]
  );
  const transition = useAnimatedStyle(() => {
    runOnJS(onStartCallback)();

    return Object.entries(animationStyle).reduce((acc, [key, val], styleIndex) => {
      const value =
        key === 'transform'
          ? val.map((transformStyle: Record<string, any>, transformIndex: number) =>
              Object.fromEntries(
                Object.entries(transformStyle).map(([transformKey, transformValue]) => [
                  transformKey,
                  timingAnimation(transformValue, styleIndex === 0 && transformIndex === 0),
                ])
              )
            )
          : timingAnimation(val, styleIndex === 0);

      return Object.assign({}, acc, {
        [key]: value,
      });
    }, {});
  }, [animation]);

  return transition;
};
