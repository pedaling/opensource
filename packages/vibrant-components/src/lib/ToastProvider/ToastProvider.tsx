import { createContext, useContext, useMemo, useRef, useState } from 'react';
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
const ToastActionContext = createContext<{
  showToast: (props: DistributiveOmit<ToastProps, 'id'>) => void;
  closeToast: () => void;
}>({ showToast: () => {}, closeToast: () => {} });

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [toastProps, setToastProps] = useState<ToastProps | undefined>(undefined);
  const lastIdRef = useRef(0);

  const toastAction = useMemo(
    () => ({
      showToast: (props: DistributiveOmit<ToastProps, 'id'>) => {
        lastIdRef.current++;

        setToastProps({ ...props, id: lastIdRef.current });

        if (props.duration === 0) {
          return;
        }

        const timer = setTimeout(() => {
          setToastProps(undefined);
        }, (props.duration ?? DURATION) + 500);

        return () => clearTimeout(timer);
      },
      closeToast: () => {
        setToastProps(undefined);
      },
    }),
    []
  );

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
  const toastAction = useContext(ToastActionContext);

  return toastAction;
};
