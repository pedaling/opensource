import type { ComponentClass } from 'react';
import { useMemo } from 'react';
import Animated from 'react-native-reanimated';
import { useInterpolation } from '@vibrant-ui/core';
import { transformMotionProps } from '../props/transform';
import { useTransition } from '../useTransition/useTransition';
import { handleTransformStyle } from '../utils/handleTransformStyle';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(
  ({ innerRef, children, style = {}, animation, duration = 500, easing = 'easeOutQuad', onEnd, ...restProps }) => {
    const { interpolation } = useInterpolation(transformMotionProps);
    const transition = useTransition({
      animation,
      duration,
      easing,
      onEnd,
    });

    const AnimatedViewComponent = useMemo(
      () => Animated.createAnimatedComponent(children.type as ComponentClass),
      [children.type]
    );

    const currentStyle = useMemo(() => interpolation(handleTransformStyle(style)), [style, interpolation]);

    return (
      <AnimatedViewComponent ref={innerRef} style={[currentStyle, transition]} {...restProps} {...children.props} />
    );
  }
);
