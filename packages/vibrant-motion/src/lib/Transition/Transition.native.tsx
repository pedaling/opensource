/* eslint-disable react-hooks/exhaustive-deps */
import type { ComponentClass } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useInterpolation } from '@vibrant-ui/core';
import { useSafeDeps } from '@vibrant-ui/utils';
import { NATIVE_SUPPORT_ANIMATION_PROPERTIES, easings } from '../constants';
import { handleTransformStyle } from '../utils/handleTransformStyle';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(
  ({ innerRef, children, style = {}, animation, duration = 500, easing = 'easeOutQuad', onEnd, ...restProps }) => {
    const { useInterpolateStyle } = useInterpolation();
    const reverse = useRef(false);
    const isFirstRender = useRef(true);
    const onEndRef = useSafeDeps(onEnd);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const interpolatedAnimation = useInterpolateStyle(useMemo(() => animation, [JSON.stringify(animation)]));

    const useNativeDriver = useRef(true);

    const previousAnimation = useRef<Record<string, any>>({});

    const animatedValue = useMemo(() => new Animated.Value(0), []);
    const interpolatedAnimationKey = JSON.stringify(interpolatedAnimation);

    const animatedStyle = useMemo(
      () =>
        Object.fromEntries(
          Object.keys(interpolatedAnimation).map(key => {
            const value = interpolatedAnimation[key];
            const previousValue = previousAnimation.current[key];

            if (!NATIVE_SUPPORT_ANIMATION_PROPERTIES.includes(key)) {
              useNativeDriver.current = false;
            }

            if (key === 'transform' && Array.isArray(value)) {
              return [
                key,
                value.map((transformStyle, index) =>
                  Object.fromEntries(
                    Object.entries(transformStyle).map(([transformKey, transformValue]) => [
                      transformKey,
                      animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: reverse.current
                          ? [transformValue, previousValue?.[index]?.[transformKey] ?? transformValue]
                          : [previousValue?.[index]?.[transformKey] ?? transformValue, transformValue],
                      }),
                    ])
                  )
                ),
              ];
            }

            return [
              key,
              animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: reverse.current ? [value, previousValue ?? value] : [previousValue ?? value, value],
              }),
            ];
          })
        ),
      [interpolatedAnimationKey]
    );

    useEffect(() => {
      previousAnimation.current = interpolatedAnimation;

      if (Object.keys(interpolatedAnimation).length === 0) {
        return;
      }

      if (!isFirstRender.current) {
        const animation = Animated.timing(animatedValue, {
          toValue: reverse.current ? 0 : 1,
          duration,
          easing: easings[easing],
          useNativeDriver: useNativeDriver.current,
        });

        reverse.current = !reverse.current;

        animation.start(() => {
          onEndRef.current?.();
        });

        return () => {
          animation.stop();
        };
      } else {
        isFirstRender.current = false;
      }

      return;
    }, [interpolatedAnimationKey, animatedStyle, onEndRef]);

    const AnimatedViewComponent = useMemo(
      () => Animated.createAnimatedComponent(children.type as ComponentClass),
      [children.type]
    );

    const currentStyle = useInterpolateStyle(handleTransformStyle(style));

    return (
      <AnimatedViewComponent ref={innerRef} style={[currentStyle, animatedStyle]} {...restProps} {...children.props} />
    );
  }
);
