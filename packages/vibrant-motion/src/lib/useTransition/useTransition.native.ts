import { useCallback, useEffect, useMemo, useRef } from 'react';
import type { EasingFunction } from 'react-native';
import type { AnimatableValue, EasingFunctionFactory } from 'react-native-reanimated';
import { Easing, runOnJS, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import type { AllSystemProps } from '@vibrant-ui/core';
import { useInterpolation } from '@vibrant-ui/core';
import { useCallbackRef } from '@vibrant-ui/utils';
import type { EasingDictionary } from '../constants';
import type { TransformMotionProps } from '../props/transform';
import { transformMotionProps } from '../props/transform';
import type { AnimationResult } from '../types';

type UseTransitionProps = {
  animation: AllSystemProps & TransformMotionProps;
  duration: number;
  easing: keyof EasingDictionary;
  onEnd?: ((e?: AnimationResult<any>) => void) | undefined;
};

const convertEasing: Record<keyof EasingDictionary, EasingFunction | EasingFunctionFactory> = {
  easeInQuad: Easing.in(Easing.ease),
  easeOutQuad: Easing.out(Easing.ease),
  linear: Easing.linear,
};

export const useTransition = ({ animation, duration = 200, easing, onEnd }: UseTransitionProps) => {
  const { interpolation } = useInterpolation(transformMotionProps);

  const animationStyle: AllSystemProps & TransformMotionProps = useMemo(
    () => interpolation(animation),
    [animation, interpolation]
  );

  const onEndRef = useCallbackRef(onEnd);
  const isStarted = useRef(false);
  const endCallbackTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const onEndCallback = useCallback(() => {
    if (isStarted.current) {
      isStarted.current = false;

      onEndRef?.();
    }
  }, [onEndRef]);

  const onStartCallback = useCallback(() => {
    if (!isStarted.current) {
      isStarted.current = true;

      endCallbackTimerRef.current = setTimeout(() => {
        onEndCallback();
      }, duration);
    }
  }, [duration, onEndCallback]);

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

  useEffect(
    () => () => {
      clearTimeout(endCallbackTimerRef.current);

      if (isStarted.current) {
        onEndRef();
      }
    },
    [onEndRef]
  );

  return transition;
};
