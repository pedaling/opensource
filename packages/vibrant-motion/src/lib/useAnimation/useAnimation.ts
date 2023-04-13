import { useSharedValue } from 'react-native-reanimated';
import type { EasingDictionary } from '../constants';
import type { AnimationResult } from '../types';

/* eslint-disable @typescript-eslint/naming-convention */
export type UseAnimationProps = {
  duration?: number;
  loop?: boolean | 'reverse';
  easing: keyof EasingDictionary;
  onStart?: ((e?: AnimationResult<any>) => void) | undefined;
  onEnd?: ((e?: AnimationResult<any>) => void) | undefined;
  delay: number;
};

export type AnimationOptions = {
  reverse?: boolean;
  reset?: boolean;
};

export const useAnimation = (props: UseAnimationProps) => {
  const progress = useSharedValue(0);
  const startAnimation = (options?: AnimationOptions) => {};

  return {
    progress,
    startAnimation,
    stopAnimation: () => {},
    resumeAnimation: () => {},
  };
};
