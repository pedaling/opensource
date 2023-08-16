import { useSharedValue } from 'react-native-reanimated';
import type { EasingDictionary } from '../constants';
import type { AnimationResult } from '../types';

export type UseMotionProps = {
  duration?: number;
  loop?: boolean;
  easing: keyof EasingDictionary;
  onStart?: ((e?: AnimationResult<any>) => void) | undefined;
  onEnd?: ((e?: AnimationResult<any>) => void) | undefined;
  delay: number;
};

export const useMotion = (_: UseMotionProps) => {
  const progress = useSharedValue(0);
  const startAnimation = () => {};

  return {
    progress,
    startAnimation,
    stopAnimation: () => {},
    resumeAnimation: () => {},
  };
};
