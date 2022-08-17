import type { ReactElement, Ref } from 'react';
import type { AllSystemProps } from '@vibrant-ui/core';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { Animation } from '../types';

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
  animation: WithMotion<AllSystemProps>;
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
