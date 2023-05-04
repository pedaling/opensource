import type { ReactElement, Ref } from 'react';
import type { AllSystemProps } from '@vibrant-ui/core';
import { isNative, propVariant, withVariation } from '@vibrant-ui/core';
import type { EasingDictionary } from '../constants';
import type { TransformMotionProps } from '../props/transform';
import { handleTransformStyle } from '../utils/handleTransformStyle';

type TransitionProps = {
  children: ReactElement;
  duration?: number;
  animation: Omit<AllSystemProps, 'transform'> & TransformMotionProps;
  style?: any;
  ref?: Ref<any>;
  easing?: keyof EasingDictionary;
  onEnd?: () => void;
};

export const withTransitionVariation = withVariation<TransitionProps>('Transition')(
  propVariant({
    props: [
      {
        name: 'animation',
      },
    ],
    variants: ({ animation }) => ({
      animation: isNative ? animation : handleTransformStyle(animation),
    }),
  })
);
