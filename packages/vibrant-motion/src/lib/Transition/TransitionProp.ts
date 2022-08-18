import type { ReactElement, Ref } from 'react';
import type { AllSystemProps } from '@vibrant-ui/core';
import { withVariation } from '@vibrant-ui/core';
import type { TransformMotionProps } from '../props/transform';

type TransitionProps = {
  children: ReactElement;
  duration?: number;
  animation: AllSystemProps & TransformMotionProps;
  style?: any;
  ref?: Ref<any>;
};

export const withTransitionVariation = withVariation<TransitionProps>('Transition')();
