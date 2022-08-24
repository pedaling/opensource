import { useEffect, useMemo } from 'react';
import { useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import { easings } from '../constants';
import { transformMotionProps } from '../props/transform';
import type { AnimationResult } from '../types';
import { useReactSpring } from '../useReactSpring';
import { withTransformStyle } from '../withTransformStyle';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(
  ({ innerRef, children, style, animation, duration, easing, onStart, onEnd, ...restProps }) => {
    const { interpolation } = useInterpolation(transformMotionProps);
    const { animated, useSpring } = useReactSpring();

    const AnimatedComponent = useMemo(
      () => (typeof children.type === 'string' ? animated[children.type as 'div'] : animated(children.type)),
      [animated, children.type]
    );
    const { getResponsiveValue } = useResponsiveValue();

    const currentStyle = useMemo(
      () => Object.fromEntries(Object.entries(animation).map(([key, value]) => [key, getResponsiveValue(value)])),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [JSON.stringify(animation), getResponsiveValue]
    );

    const option = useMemo(
      () => ({
        to: interpolation(currentStyle),
        config: {
          duration,
          easing: easing && easings[easing],
        },
        onStart,
        onRest: onEnd
          ? (result: AnimationResult) => {
              if (result.finished) {
                onEnd(result);
              }
            }
          : undefined,
      }),
      [currentStyle, duration, easing, interpolation, onEnd, onStart]
    );

    const [styles, springApi] = useSpring(() => ({ from: interpolation(animation) }));

    useEffect(() => {
      springApi.start(option);
    }, [option, springApi]);

    return (
      <AnimatedComponent
        ref={innerRef}
        style={{ ...style, ...withTransformStyle(styles) }}
        {...restProps}
        {...children.props}
      />
    );
  }
);
