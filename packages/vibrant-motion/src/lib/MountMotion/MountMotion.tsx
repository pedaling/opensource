import { useEffect, useRef, useState } from 'react';
import { Motion } from '../Motion';
import { withMountMotionVariation } from './MountMotionProp';

export const MountMotion = withMountMotionVariation(
  ({ mount, mountAnimation, unmountAnimation, onEnd, duration, ...restProps }) => {
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
      if (mount) {
        setIsMounted(true);

        return;
      }

      if (!unmountAnimation) {
        timerRef.current = setTimeout(() => {
          setIsMounted(false);
        }, duration);
      }
    }, [duration, mount, unmountAnimation]);

    if (!isMounted) {
      return null;
    }

    return (
      <Motion
        duration={duration}
        animation={mount ? mountAnimation ?? {} : unmountAnimation ?? {}}
        onEnd={event => {
          if (!mount) {
            setIsMounted(false);
          }

          onEnd?.(event);
        }}
        {...restProps}
      />
    );
  }
);
