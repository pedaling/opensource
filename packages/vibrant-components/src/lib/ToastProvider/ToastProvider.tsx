import { createContext, useCallback, useContext, useRef, useState } from 'react';
import type { FC } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';
import type { DistributiveOmit } from '@vibrant-ui/utils';
import type { ToastProps as ToastComponentProps } from '../Toast/ToastProps';

const DURATION = 5000;

type ToastProviderProps = {
  children: ReactElementChild;
};

type ToastProps = ToastComponentProps & {
  id: number;
  duration?: number;
};

const ToastPropsContext = createContext<ToastProps | undefined>(undefined);
const ToastActionContext = createContext<(props?: DistributiveOmit<ToastProps, 'id'>) => void>(() => {});

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [toastProps, setToastProps] = useState<ToastProps | undefined>(undefined);

  const lastIdRef = useRef(0);

  const toastAction = useCallback((props?: DistributiveOmit<ToastProps, 'id'>) => {
    lastIdRef.current++;

    if (!props) {
      setToastProps(undefined);

      return;
    }

    setToastProps({ ...props, id: lastIdRef.current });

    if (props.duration === 0) {
      return;
    }

    const timer = setTimeout(() => {
      setToastProps(undefined);
    }, (props.duration ?? DURATION) + 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastActionContext.Provider value={toastAction}>
      <ToastPropsContext.Provider value={toastProps}>{children}</ToastPropsContext.Provider>
    </ToastActionContext.Provider>
  );
};

export const useToastProps = () => {
  const toastProps = useContext(ToastPropsContext);

  return {
    toastProps,
  };
};

export const useToastAction = () => {
  const setToastProps = useContext(ToastActionContext);

  const closeToast = useCallback(() => {
    setToastProps(undefined);
  }, [setToastProps]);

  return {
    showToast: setToastProps,
    closeToast,
  };
};
