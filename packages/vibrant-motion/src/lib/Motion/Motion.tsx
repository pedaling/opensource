import { useMemo } from 'react';
import { animated, easings, useSpring } from '../external/ReactSpring';
import { withTransformStyle } from '../withTransformStyle';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(({ children, duration, loop, from, to }) => {
  const AnimatedComponent = useMemo(
    () =>
      typeof children.type === 'string'
        ? animated[children.type as keyof JSX.IntrinsicElements]
        : animated(children.type),
    [children.type]
  );

  const style = useSpring({
    from,
    to,
    config: {
      duration,
      easing: easings.easeInQuad,
    },
    loop,
  });

  return <AnimatedComponent style={withTransformStyle(style)} {...children.props} />;
});
