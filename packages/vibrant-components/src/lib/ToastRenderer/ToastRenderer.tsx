import { useEffect, useState } from 'react';
import { Transition } from '@vibrant-ui/motion';
import { StackedPortal } from '../StackedPortal';
import { Toast } from '../Toast';
import { useToastProps } from '../ToastProvider/ToastProvider';

const DURATION = 2500;

export const ToastRenderer = () => {
  const toastProps = useToastProps();
  const [show, setShow] = useState(false);
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    if (toastProps) {
      setIsMount(true);
    }
  }, [toastProps, toastProps?.toastKey]);

  useEffect(() => {
    if (!show) {
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
    }, toastProps?.duration ?? DURATION);

    return () => clearTimeout(timer);
  }, [show, toastProps?.duration, toastProps?.toastKey]);

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
      zIndex={100}
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
