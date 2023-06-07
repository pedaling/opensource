import type { ComponentClass } from 'react';
import { useMemo } from 'react';
import Animated from 'react-native-reanimated';
import { useTransition } from '../useTransition/useTransition';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(
  ({ innerRef, children, style, animation, duration = 500, easing = 'easeOutQuad', onEnd, ...restProps }) => {
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

    return (
      <AnimatedViewComponent ref={innerRef} style={{ ...style, ...transition }} {...restProps} {...children.props} />
    );
  }
);
