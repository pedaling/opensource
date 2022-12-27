import { useEffect, useState } from 'react';
import { Motion } from '../Motion';
import { withMountMotionVariation } from './MountMotionProp';

export const MountMotion = withMountMotionVariation(
  ({ mount, mountAnimation = {}, unmountAnimation = {}, onEnd, ...restProps }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      if (mount) {
        setIsMounted(true);
      }
    }, [mount]);

    if (!isMounted) {
      return null;
    }

    return (
      <Motion
        animation={mount ? mountAnimation : unmountAnimation}
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
