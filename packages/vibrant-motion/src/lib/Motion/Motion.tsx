import { useMemo } from 'react';
import { animated, easings, useSpring } from 'react-spring';
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

  return <AnimatedComponent style={style} {...children.props} />;
});
