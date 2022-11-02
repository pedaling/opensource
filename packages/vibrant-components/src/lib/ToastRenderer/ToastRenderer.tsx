import { useEffect, useMemo, useState } from 'react';
import { useCurrentTheme } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { StackedPortal } from '../StackedPortal';
import type { ToastProps } from '../Toast';
import { Toast } from '../Toast';
import { useToast, useToastProps } from '../ToastProvider/ToastProvider';

const DURATION = 5000;

export const ToastRenderer = () => {
  const { toastProps } = useToastProps();
  const [show, setShow] = useState(false);
  const [isMount, setIsMount] = useState(false);
  const { closeToast } = useToast();

  const toastComponentProps = useMemo<ToastProps | undefined>(() => {
    if (toastProps === undefined) {
      return undefined;
    }

    const { id: _id, duration: _duration, ...restToastProps } = toastProps;

    return restToastProps;
  }, [toastProps]);

  const {
    theme: { zIndex },
  } = useCurrentTheme();

  useEffect(() => {
    if (toastComponentProps) {
      setIsMount(true);
    }
  }, [toastComponentProps]);

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

  useEffect(
    () => () => {
      closeToast();
    },
    [closeToast]
  );

  return toastComponentProps && isMount ? (
    <StackedPortal
      id="toast"
      onMount={() => {
        setShow(true);
      }}
      order={1}
      position={['bottom', 'bottom', 'top']}
      offset={[20, 20, 16]}
      left={0}
      right={0}
      zIndex={zIndex.toast}
      safeAreaMode="margin"
    >
      <Transition
        onEnd={() => {
          if (!show) {
            setIsMount(false);

            closeToast();
          }
        }}
        animation={{ opacity: show ? 1 : 0 }}
        duration={200}
        easing="easeOutQuad"
      >
        <Toast {...toastComponentProps} />
      </Transition>
    </StackedPortal>
  ) : null;
};
