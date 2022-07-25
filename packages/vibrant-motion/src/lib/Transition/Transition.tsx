import { useEffect, useMemo } from 'react';
import { animated, useSpring } from '../external/ReactSpring';
import { withTransformStyle } from '../withTransformStyle';
import { withTransitionVariation } from './TransitionProp';

export const Transition = withTransitionVariation(({ children, style, duration }) => {
  const AnimatedComponent = useMemo(
    () => (typeof children.type === 'string' ? animated[children.type as 'div'] : animated(children.type)),
    [children.type]
  );

  const option = useMemo(
    () => ({
      to: style,
      config: {
        duration,
      },
    }),
    [duration, style]
  );

  const [styles, springApi] = useSpring(() => ({ from: style }));

  useEffect(() => {
    springApi.start(option);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Object.values(style)]);

  return <AnimatedComponent style={withTransformStyle(styles)} {...children.props} />;
});
