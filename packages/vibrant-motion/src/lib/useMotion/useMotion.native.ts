import { useRef } from 'react';
import type { EasingFunction } from 'react-native';
import type { EasingFunctionFactory } from 'react-native-reanimated';
import {
  Easing,
  runOnJS,
  useSharedValue,
  useWorkletCallback,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import type { EasingDictionary } from '../constants';
import type { UseMotionProps } from './useMotion';

const convertEasing: Record<keyof EasingDictionary, EasingFunction | EasingFunctionFactory> = {
  easeInQuad: Easing.in(Easing.ease),
  easeOutQuad: Easing.out(Easing.ease),
  linear: Easing.linear,
};

export const useMotion = ({ duration, loop, delay, easing, onStart, onEnd }: UseMotionProps) => {
  const progress = useSharedValue(0);
  const onStartRef = useRef(onStart);
  const onEndRef = useRef(onEnd);
  const isAnimated = useSharedValue(false);
  const target = useSharedValue(1);
  const startAnimation = useWorkletCallback(() => {
    const [from, to] = [0, 1];

    if (target.value !== to) {
      target.value = to;
    }

    if (!isAnimated.value && onStartRef.current) {
      runOnJS(onStartRef.current)();

      isAnimated.value = true;
    }

    if (loop) {
      progress.value = withDelay(delay, withRepeat(withTiming(to, { duration, easing: convertEasing[easing] }), -1));

      return;
    }

    progress.value = from;

    progress.value = withTiming(to, { duration, easing: Easing.ease }, finished => {
      if (finished && onEndRef.current) {
        runOnJS(onEndRef.current)();

        isAnimated.value = false;
      }
    });
  }, [duration, easing, loop, progress]);

  const stopAnimation = useWorkletCallback(() => {
    progress.value = progress.value.valueOf();
  }, []);

  const resumeAnimation = useWorkletCallback(() => {
    progress.value = withTiming(target.value, { duration, easing: Easing.ease }, finished => {
      if (finished && onEndRef.current) {
        runOnJS(onEndRef.current)();

        isAnimated.value = false;
      }
    });
  }, []);

  return {
    progress,
    startAnimation,
    stopAnimation,
    resumeAnimation,
  };
};
