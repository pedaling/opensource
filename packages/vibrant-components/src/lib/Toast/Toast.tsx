import { useCallback, useEffect, useState } from 'react';
import { HStack, Paper, StackedPortal, VStack } from '@vibrant-ui/components';
import { PressableBox, Text } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { withToastVariation } from './ToastProps';

export const Toast = withToastVariation(
  ({ title, open, duration = 2500, buttonText, onButtonClick, onClose, IconComponent, color }) => {
    const [isMount, setIsMount] = useState(open);
    const [show, setShow] = useState(isMount);

    const unmount = useCallback(() => {
      onClose?.();

      setIsMount(false);
    }, [onClose]);

    useEffect(() => {
      if (open) {
        setIsMount(true);
      }
    }, [duration, open, unmount]);

    useEffect(() => {
      if (isMount) {
        setShow(true);
      }
    }, [isMount]);

    useEffect(() => {
      if (show) {
        setTimeout(() => setShow(false), duration);
      }
    }, [duration, show]);

    if (!isMount) {
      return null;
    }

    return (
      <Transition
        animation={{ opacity: show ? 1 : 0 }}
        duration={200}
        easing="easeOutQuad"
        onEnd={() => {
          if (!show) {
            unmount();
          }
        }}
      >
        <StackedPortal id="toast" order={100} left={0} right={0} bottom={0} zIndex={100} safeAreaMode="margin">
          <HStack mx={20} mb={[20, 0]} mt={[0, 16]} flexGrow={[1, 0]} alignment="center">
            <Paper backgroundColor="inverseSurface" width={['100%', 'auto']}>
              <HStack px={16} py={12} alignItems="center" flexGrow={[1, 0]}>
                {IconComponent && (
                  <VStack mr={8} flexShrink={0}>
                    <IconComponent size={18} fill={color} />
                  </VStack>
                )}
                <HStack flexGrow={[1, 0]}>
                  <Text wordBreak="break-all" fontSize={14} color="onInverseSurface">
                    {title}
                  </Text>
                </HStack>
                {buttonText !== undefined && onButtonClick && (
                  <VStack flexShrink={0}>
                    <PressableBox ml={12} onClick={onButtonClick}>
                      <Text fontSize={14} color="onViewInformative" fontWeight="medium">
                        {buttonText}
                      </Text>
                    </PressableBox>
                  </VStack>
                )}
              </HStack>
            </Paper>
          </HStack>
        </StackedPortal>
      </Transition>
    );
  }
);
