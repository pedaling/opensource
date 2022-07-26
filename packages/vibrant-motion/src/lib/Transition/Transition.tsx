import { useEffect, useMemo } from 'react';
import { useResponsiveValue } from '@vibrant-ui/core';
import { animated, useSpring } from '../external/ReactSpring';
import { withTransformStyle } from '../withTransformStyle';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(({ children, style, duration }) => {
  const AnimatedComponent = useMemo(
    () => (typeof children.type === 'string' ? animated[children.type as 'div'] : animated(children.type)),
    [children.type]
  );
  const { getResponsiveValue } = useResponsiveValue();

  const currentStyle = useMemo(
    () => Object.fromEntries(Object.entries(style).map(([key, value]) => [key, getResponsiveValue(value)])),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(style), getResponsiveValue]
  );

  const option = useMemo(
    () => ({
      to: currentStyle,
      config: {
        duration,
      },
    }),
    [duration, currentStyle]
  );

  const [styles, springApi] = useSpring(() => ({ from: style }));

  useEffect(() => {
    springApi.start(option);
  }, [option, springApi]);

  return <AnimatedComponent style={withTransformStyle(styles)} {...children.props} />;
});
