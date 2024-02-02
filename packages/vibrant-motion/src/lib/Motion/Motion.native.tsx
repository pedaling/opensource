/* eslint-disable react-hooks/exhaustive-deps */
import type { ComponentClass } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useInterpolation } from '@vibrant-ui/core';
import { useSafeDeps } from '@vibrant-ui/utils';
import { NATIVE_SUPPORT_ANIMATION_PROPERTIES, easings } from '../constants';
import { handleTransformStyle } from '../utils/handleTransformStyle';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(
  ({
    innerRef,
    children,
    duration,
    loop,
    from,
    to,
    delay = 0,
    easing = 'easeOutQuad',
    onEnd,
    style = {},
    ...restProps
  }) => {
    const { useInterpolateStyle } = useInterpolation();
    const onEndRef = useSafeDeps(onEnd);

    const useNativeDriver = useRef(true);
    const fromStyle = useInterpolateStyle(from);
    const toStyle = useInterpolateStyle(to);

    const interpolatedAnimations = useMemo(
      () =>
        Object.fromEntries(
          Object.entries(fromStyle).map(([property]) => [property, [fromStyle[property], toStyle[property]]] as const)
        ),
      [JSON.stringify(from), JSON.stringify(to)]
    );

    const animatedValue = useMemo(() => new Animated.Value(0), []);

    const interpolatedAnimationsKey = JSON.stringify(interpolatedAnimations);

    const animatedStyle = useMemo(
      () =>
        Object.fromEntries(
          Object.keys(interpolatedAnimations).map(key => {
            const value = interpolatedAnimations[key];

            if (!NATIVE_SUPPORT_ANIMATION_PROPERTIES.includes(key)) {
              useNativeDriver.current = false;
            }

            if (key === 'transform' && Array.isArray(value[0])) {
              const [transformFrom, transformTo] = value;

              return [
                key,
                transformFrom.map((transformStyle, index) =>
                  Object.fromEntries(
                    Object.entries(transformStyle).map(([transformKey, transformValue]) => [
                      transformKey,
                      animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [transformValue, transformTo[index][transformKey]],
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
                outputRange: [...value],
              }),
            ];
          })
        ),
      [interpolatedAnimationsKey]
    );

    useEffect(() => {
      if (Object.keys(interpolatedAnimations).length === 0) {
        return;
      }

      const animation = Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration,
          easing: easings[easing],
          delay,
          useNativeDriver: useNativeDriver.current,
        }),
        {
          iterations: loop ? -1 : 1,
        }
      );

      animation.start(() => {
        onEndRef.current?.();
      });

      return () => {
        animation.stop();
      };
    }, [delay, duration, easing, interpolatedAnimationsKey]);

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
