import { useCallback, useEffect, useState } from 'react';
import { Box, KeyboardAvoidingBox, PortalBox } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { Pressable } from '../Pressable';
import { withBackdropVariation } from './BackdropProps';

export const Backdrop = withBackdropVariation(
  ({
    open,
    children,
    zIndex,
    color = 'dim',
    transitionDuration = 0,
    onClick,
    onDismiss,
    scrollable,
    testId = 'backdrop',
    display,
    ...restProps
  }) => {
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
      <Transition
        animation={{ opacity: open ? 1 : 0 }}
        duration={transitionDuration}
        onEnd={() => {
          unmount();

          onDismiss?.();
        }}
      >
        <PortalBox
          zIndex={zIndex}
          top={0}
          right={0}
          bottom={0}
          left={0}
          backgroundColor={color}
          scrollable={scrollable}
          data-testid={testId}
          display={display}
        >
          <KeyboardAvoidingBox>
            <Box flex={1} {...restProps}>
              <Pressable
                as="div"
                position="absolute"
                cursor="default"
                top={0}
                right={0}
                bottom={0}
                left={0}
                onClick={onClick}
              />
              {children}
            </Box>
          </KeyboardAvoidingBox>
        </PortalBox>
      </Transition>
    );
  }
);
