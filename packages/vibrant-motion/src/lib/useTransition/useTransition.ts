import type { AllSystemProps } from '@vibrant-ui/core';
import type { EasingDictionary } from '../constants';
import type { TransformMotionProps } from '../props/transform';
import type { AnimationResult } from '../types';

export type UseTransitionProps = {
  animation: AllSystemProps & TransformMotionProps;
  duration: number;
  easing: keyof EasingDictionary;
  onEnd?: ((e?: AnimationResult<any>) => void) | undefined;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const useTransition = (props: UseTransitionProps) => ({});
