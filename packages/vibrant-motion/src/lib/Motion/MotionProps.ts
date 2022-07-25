import type { ForwardedRef, ReactElement } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import { motionVariant } from '../motionVariant';
import type { AnimationStyle, WithTransition } from '../types';

export type MotionRefValue = {
  start: (options?: { reverse?: boolean; reset?: boolean }) => void;
  pause: () => void;
  stop: () => void;
  resume: () => void;
};

type MotionProps = {
  ref?: ForwardedRef<MotionRefValue>;
  children: ReactElement;
  duration?: number;
  loop?: boolean | 'reverse';
  style: WithTransition<AnimationStyle>;
};

export const withMotionVariation = withVariation<MotionProps>()(
  motionVariant({
    name: 'backgroundColor',
    scale: 'colors',
  }),
  motionVariant({
    name: 'borderColor',
    scale: 'colors',
  }),
  ({ style, ...restProps }) => {
    const { from, to } = Object.entries(style).reduce(
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
