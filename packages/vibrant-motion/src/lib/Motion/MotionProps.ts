import type { ReactElement } from 'react';
import { propVariant, withVariation } from '@vibrant-ui/core';
import type { ColorToken } from '@vibrant-ui/theme';
import { motionVariant } from '../motionVariant';
import type { Animation } from '../types';

type MotionProps = {
  children: ReactElement;
  duration: number;
  loop?: true | false | 'reverse';
  style: {
    x?: Animation<number | string>;
    y?: Animation<number | string>;
    scale?: Animation<number>;
    opacity?: Animation<number>;
    backgroundColor?: Animation<ColorToken>;
  };
};

export const withMotionVariation = withVariation<MotionProps>()(
  motionVariant({
    name: 'backgroundColor',
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
