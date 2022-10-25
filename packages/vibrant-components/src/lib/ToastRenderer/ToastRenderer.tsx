import { useEffect, useState } from 'react';
import { useCurrentTheme } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { StackedPortal } from '../StackedPortal';
import { Toast } from '../Toast';
import { useToastProps } from '../ToastProvider/ToastProvider';

const DURATION = 5000;

export const ToastRenderer = () => {
  const { toastProps } = useToastProps();
  const [show, setShow] = useState(false);
  const [isMount, setIsMount] = useState(false);

  const {
    theme: { zIndex },
  } = useCurrentTheme();

  useEffect(() => {
    if (toastProps) {
      setIsMount(true);
    }
  }, [toastProps, toastProps?.id]);

  useEffect(() => {
    if (!show) {
      return;
    }

    if (toastProps?.duration === 0) {
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);

      toastProps?.onClose?.();
    }, toastProps?.duration ?? DURATION);

    return () => clearTimeout(timer);
  }, [show, toastProps, toastProps?.duration, toastProps?.id]);

  return toastProps && isMount ? (
    <StackedPortal
      id="toast"
      onMount={() => {
        setShow(true);
      }}
      order={1}
      left={0}
      right={0}
      bottom={0}
      zIndex={zIndex.toast}
      safeAreaMode="margin"
    >
      <Transition
        onEnd={() => {
          if (!show) {
            setIsMount(false);
          }
        }}
        animation={{ opacity: show ? 1 : 0 }}
        duration={200}
        easing="easeOutQuad"
      >
        <Toast {...toastProps} />
      </Transition>
    </StackedPortal>
  ) : null;
};
