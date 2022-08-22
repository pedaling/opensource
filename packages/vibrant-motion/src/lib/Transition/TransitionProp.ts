import type { ReactElement, Ref } from 'react';
import type { AnimationResult } from 'react-spring';
import type { AllSystemProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { EasingDictionary } from '../constants';
import type { TransformMotionProps } from '../props/transform';

type TransitionProps = {
  children: ReactElement;
  duration?: number;
  animation: AllSystemProps & TransformMotionProps;
  style?: any;
  ref?: Ref<any>;
  easing?: keyof EasingDictionary;
  onStart?: (e: AnimationResult) => void;
  onEnd?: (e: AnimationResult) => void;
};

export const withTransitionVariation = withVariation<TransitionProps>('Transition')();
