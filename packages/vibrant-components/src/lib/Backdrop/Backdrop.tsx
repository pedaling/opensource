import { useCallback, useEffect, useState } from 'react';
import { Box, Portal } from '@vibrant-ui/core';
import { Motion } from '@vibrant-ui/motion';
import { Pressable } from '../Pressable';
import { withBackdropVariation } from './BackdropProps';

export const Backdrop = withBackdropVariation(
  ({ open, children, zIndex, color = 'dim', transitionDuration = 0, onClick }) => {
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
      <Portal>
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
          <Box
            as="div"
            base={Pressable}
            position="absolute"
            zIndex={zIndex}
            top={0}
            right={0}
            bottom={0}
            left={0}
            backgroundColor={color}
            onClick={onClick}
          >
            {children}
          </Box>
        </Motion>
      </Portal>
    );
  }
);
