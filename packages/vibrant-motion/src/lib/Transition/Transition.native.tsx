import { useEffect, useMemo } from 'react';
import { useSpring } from '@react-spring/core';
import { useInterpolation, useResponsiveValue } from '@vibrant-ui/core';
import { useObjectMemo, useSafeDeps } from '@vibrant-ui/utils';
import { easings } from '../constants';
import { env } from '../constants/env';
import { transformMotionProps } from '../props/transform';
import type { AnimationResult } from '../types';
import { useReactSpring } from '../useReactSpring';
import { withTransformStyle } from '../withTransformStyle';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(
  ({ innerRef, children, style, animation, duration, easing = 'easeOutQuad', onStart, onEnd, ...restProps }) => {
    const { interpolation } = useInterpolation(transformMotionProps);
    const { animated } = useReactSpring();
    const onEndRef = useSafeDeps(onEnd);

    const AnimatedComponent = useMemo(
      () => (typeof children.type === 'string' ? animated[children.type as 'div'] : animated(children.type)),
      [animated, children.type]
    );
    const { getResponsiveValue } = useResponsiveValue();

    const currentStyle = useObjectMemo(
      useMemo(
        () =>
          interpolation(
            Object.fromEntries(Object.entries(animation).map(([key, value]) => [key, getResponsiveValue(value)]))
          ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [JSON.stringify(animation), getResponsiveValue, interpolation]
      )
    );

    const option = useMemo(
      () => ({
        to: currentStyle,
        config: {
          duration,
          easing: easing && easings[easing],
        },
        onStart,
        onRest: (result: AnimationResult) => {
          onEndRef.current?.(result);
        },
      }),
      [currentStyle, duration, easing, onEndRef, onStart]
    );

    const [styles, springApi] = useSpring(() => ({ from: interpolation(animation) }));

    useEffect(() => {
      springApi.start(option);
    }, [option, springApi]);

    return (
      <AnimatedComponent
        ref={innerRef}
        style={{
          ...withTransformStyle(style ?? {}),
          ...withTransformStyle(env === 'test' ? option.to : styles),
        }}
        {...restProps}
        {...children.props}
      />
    );
  }
);
