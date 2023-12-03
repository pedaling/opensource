import type { ReactElement, Ref } from 'react';
import type { AllSystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { EasingDictionary } from '../constants';
import type { TransformMotionProps } from '../props/transform';
import type { Animation } from '../types';
import { handleTransformStyle } from '../utils/handleTransformStyle';

export type MotionRefValue = {
  start: () => void;
  pause: () => void;
  stop: () => void;
  resume: () => void;
};

type WithMotion<Style> = { [key in keyof Style]?: Animation<Style[key]> };

export type MotionProps = {
  ref?: Ref<MotionRefValue>;
  children: ReactElement;
  duration?: number;
  loop?: boolean | 'reverse';
  delay?: number;
  animation: WithMotion<Omit<AllSystemProps, 'transform'> & TransformMotionProps>;
  easing?: keyof EasingDictionary;
  style?: any;
  onEnd?: () => void;
};

export const withMotionVariation = withVariation<MotionProps>('Motion')(
  ({ animation, ...restProps }) => {
    const { from, to } = Object.entries(animation).reduce(
      (acc, [key, value]) => ({
        from: {
          ...acc.from,
          [key]: value.from,
        },
        to: {
          ...acc.to,
          [key]: value.to,
        },
      }),
      { from: {}, to: {} }
    ) as { from: Record<keyof Omit<MotionProps, 'base'>, any>; to: Record<keyof Omit<MotionProps, 'base'>, any> };

    return {
      from: handleTransformStyle(from),
      to: handleTransformStyle(to),
      ...restProps,
    };
  },
  propVariant({
    props: [
      {
        name: 'loop',
        default: false,
      },
    ],
    variants: {
      true: {
        loop: true,
      },
      false: {
        loop: false,
      },
      reverse: {
        loop: {
          reverse: true,
        },
      },
    },
  })
);
