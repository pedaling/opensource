import { useCallback, useEffect, useState } from 'react';
import { Box, PortalBox } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { Pressable } from '../Pressable';
import { withBackdropVariation } from './BackdropProps';

export const Backdrop = withBackdropVariation(
  ({ open, children, zIndex, color = 'dim', transitionDuration = 0, onClick, scrollable, ...restProps }) => {
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
        bounces={scrollable ? false : undefined}
      >
        <Box height="100%" {...restProps}>
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
              cursor="default"
              top={0}
              right={0}
              bottom={0}
              left={0}
              backgroundColor={color}
              onClick={onClick}
            />
          </Motion>
          {children}
        </Box>
      </PortalBox>
    );
  }
);
