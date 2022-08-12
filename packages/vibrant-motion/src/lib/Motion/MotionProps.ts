import type { ReactElement, Ref } from 'react';
import type { AnimationResult, easings } from 'react-spring';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { motionVariant } from '../motionVariant';
import type { Animation, AnimationStyle } from '../types';

export type MotionRefValue = {
  start: (options?: { reverse?: boolean; reset?: boolean }) => void;
  pause: () => void;
  stop: () => void;
  resume: () => void;
};

type WithMotion<Style> = { [key in keyof Style]?: Animation<Style[key]> };

type MotionProps = {
  ref?: Ref<any>;
  motionRef?: Ref<MotionRefValue>;
  children: ReactElement;
  duration?: number;
  loop?: boolean | 'reverse';
  animation: WithMotion<AnimationStyle>;
  easing?: keyof typeof easings;
  onStart?: (e: AnimationResult) => void;
  onEnd?: (e: AnimationResult) => void;
};

export const withMotionVariation = withVariation<MotionProps>('Motion')(
  motionVariant({
    name: 'backgroundColor',
    scale: 'colors',
  }),
  motionVariant({
    name: 'borderColor',
    scale: 'colors',
  }),
  motionVariant({
    name: 'opacity',
    scale: 'opacity',
  }),
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
      from,
      to,
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
