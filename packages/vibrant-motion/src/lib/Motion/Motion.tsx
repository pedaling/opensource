import { useEffect, useImperativeHandle, useMemo } from 'react';
import { animated, useSpring } from '../external/ReactSpring';
import { withTransformStyle } from '../withTransformStyle';
import { withMotionVariation } from './MotionProps';

export const Motion = withMotionVariation(({ innerRef, children, duration, loop, from, pause, to }) => {
  const AnimatedComponent = useMemo(
    () => (typeof children.type === 'string' ? animated[children.type as 'div'] : animated(children.type)),
    [children.type]
  );

  const option = useMemo(
    () => ({
      from,
      to,
      config: {
        duration,
      },
      loop,
    }),
    [duration, from, loop, to]
  );

  const [styles, springApi] = useSpring(() => ({
    from,
  }));

  useImperativeHandle(
    innerRef,
    () => ({
      start: (startOption = {}) => springApi.start({ ...option, ...startOption }),
      pause: () => springApi.pause(),
      stop: () => springApi.stop(),
      resume: () => springApi.resume(),
    }),
    [option, springApi]
  );

  useEffect(() => {
    if (pause) {
      springApi.pause();

      return;
    }

    springApi.start(option);
  }, [option, pause, springApi]);

  return <AnimatedComponent style={withTransformStyle(styles)} {...children.props} />;
});
