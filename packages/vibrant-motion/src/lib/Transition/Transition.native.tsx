import type { ComponentClass } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useInterpolation } from '@vibrant-ui/core';
import { useSafeDeps } from '@vibrant-ui/utils';
import { easings } from '../constants';
import { transformMotionProps } from '../props/transform';
import { handleTransformStyle } from '../utils/handleTransformStyle';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(
  ({ innerRef, children, style = {}, animation, duration = 500, easing = 'easeOutQuad', onEnd, ...restProps }) => {
    const { interpolation } = useInterpolation(transformMotionProps);
    const reverse = useRef(false);
    const isFirstRender = useRef(true);
    const useNativeDriver = useRef(true);
    const onEndRef = useSafeDeps(onEnd);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const interpolatedAnimation = useMemo(() => interpolation(animation), [JSON.stringify(animation), interpolation]);

    const previousAnimation = useRef<Record<string, any>>({});

    const animatedValues = useRef<Record<string, Animated.Value>>({});

    const animatedStyle = useMemo(
      () =>
        Object.fromEntries(
          Object.keys(interpolatedAnimation).map(key => {
            const value = interpolatedAnimation[key];
            const previousValue = previousAnimation.current[key];

            if (!['transform', 'opacity'].includes(key)) {
              useNativeDriver.current = false;
            }

            if (key === 'transform' && Array.isArray(value)) {
              return [
                key,
                value.map((transformStyle, index) =>
                  Object.fromEntries(
                    Object.entries(transformStyle).map(([transformKey, transformValue]) => {
                      if (!animatedValues.current[`transform.${key}`]) {
                        animatedValues.current[`transform.${key}`] = new Animated.Value(reverse.current ? 1 : 0);
                      }

                      const animatedValue = animatedValues.current[`transform.${key}`];

                      return [
                        transformKey,
                        animatedValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: reverse.current
                            ? [previousValue?.[index]?.[transformKey] ?? transformValue, transformValue]
                            : [transformValue, previousValue?.[index]?.[transformKey] ?? transformValue],
                        }),
                      ];
                    })
                  )
                ),
              ];
            }

            if (!animatedValues.current[key]) {
              animatedValues.current[key] = new Animated.Value(reverse.current ? 1 : 0);
            }

            const animatedValue = animatedValues.current[key];

            return [
              key,
              animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: reverse.current ? [previousValue ?? value, value] : [value, previousValue ?? value],
              }),
            ];
          })
        ),
      [animatedValues, interpolatedAnimation]
    );

    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false;

        return;
      }

      previousAnimation.current = interpolatedAnimation;

      Animated.parallel(
        Object.values(animatedValues.current).map(animatedValue =>
          Animated.timing(animatedValue, {
            toValue: reverse.current ? 1 : 0,
            duration,
            easing: easings[easing],
            useNativeDriver: useNativeDriver.current,
          })
        ),
        {
          stopTogether: false,
        }
      ).start(() => {
        onEndRef.current?.();
      });

      reverse.current = !reverse.current;
    }, [duration, easing, interpolatedAnimation, animatedStyle, onEndRef]);

    const AnimatedViewComponent = useMemo(
      () => Animated.createAnimatedComponent(children.type as ComponentClass),
      [children.type]
    );

    const currentStyle = useMemo(() => interpolation(handleTransformStyle(style)), [style, interpolation]);

    return (
      <AnimatedViewComponent ref={innerRef} style={[currentStyle, animatedStyle]} {...restProps} {...children.props} />
    );
  }
);
