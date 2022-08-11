import { useEffect, useMemo } from 'react';
import { useResponsiveValue } from '@vibrant-ui/core';
import { useReactSpring } from '../useReactSpring';
import { withTransformStyle } from '../withTransformStyle';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(
  ({ innerRef, children, style, animation, duration, easing, ...restProps }) => {
    const { animated, useSpring, easings } = useReactSpring();

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
        to: currentStyle,
        config: {
          duration,
          easing: easing && easings[easing],
        },
      }),
      [currentStyle, duration, easing, easings]
    );

    const [styles, springApi] = useSpring(() => ({ from: animation }));

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
