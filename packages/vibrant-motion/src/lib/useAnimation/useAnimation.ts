import { useSharedValue } from 'react-native-reanimated';
import type { EasingDictionary } from '../constants';
import type { AnimationResult } from '../types';

export type UseAnimationProps = {
  duration?: number;
  loop?: boolean;
  easing: keyof EasingDictionary;
  onStart?: ((e?: AnimationResult<any>) => void) | undefined;
  onEnd?: ((e?: AnimationResult<any>) => void) | undefined;
  delay: number;
};

export type AnimationOptions = {
  reverse?: boolean;
  reset?: boolean;
};

export const useAnimation = (_: UseAnimationProps) => {
  const progress = useSharedValue(0);
  const startAnimation = (_?: AnimationOptions) => {};

  return {
    progress,
    startAnimation,
    stopAnimation: () => {},
    resumeAnimation: () => {},
  };
};
