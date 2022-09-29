import { useCallback, useEffect, useState } from 'react';
import { PortalBox } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { Pressable } from '../Pressable';
import { withBackdropVariation } from './BackdropProps';

export const Backdrop = withBackdropVariation(
  ({ open, children, zIndex, color = 'dim', transitionDuration = 0, scrollable, onClick, ...restProps }) => {
    const [isMount, setIsMount] = useState(open);

    useEffect(() => {
      if (open) {
        setIsMount(true);
      }
    }, [open]);

    const unmount = useCallback(() => {
      if (!open) {
        setIsMount(false);
      }
    }, [open]);

    if (!isMount) {
      return null;
    }

    return (
      <PortalBox
        zIndex={zIndex}
        top={0}
        right={0}
        bottom={0}
        left={0}
        scrollable={scrollable}
        backgroundColor={color}
        {...restProps}
      >
        <Motion
          animation={{
            opacity: {
              from: open ? 0 : 1,
              to: open ? 1 : 0,
            },
          }}
          duration={transitionDuration}
          onEnd={unmount}
        >
          <Pressable
            as="div"
            position="absolute"
            zIndex={-1}
            cursor="default"
            top={0}
            right={0}
            bottom={0}
            left={0}
            onClick={onClick}
          />
        </Motion>
        {children}
      </PortalBox>
    );
  }
);
