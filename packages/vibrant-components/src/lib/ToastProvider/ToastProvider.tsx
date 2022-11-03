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

type ToastContextValue = {
  toastProps: ToastProps | undefined;
  setToastProps: (props?: DistributiveOmit<ToastProps, 'id'>) => void;
};

const ToastContext = createContext<ToastContextValue>({
  toastProps: undefined,
  setToastProps: () => {},
});

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [toastProps, setToastProps] = useState<ToastProps | undefined>(undefined);

  const lastIdRef = useRef(0);

  const contextValue = useMemo<ToastContextValue>(
    () => ({
      toastProps,
      setToastProps: props => {
        lastIdRef.current++;

        if (!props) {
          setToastProps(undefined);

          return;
        }

        setToastProps({ ...props, id: lastIdRef.current });

        if (props.duration !== 0) {
          const timer = setTimeout(() => {
            setToastProps(undefined);
          }, (props.duration ?? DURATION) + 500);

          return () => clearTimeout(timer);
        }
      },
    }),
    [toastProps]
  );

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
};

export const useToastProps = () => {
  const { toastProps } = useContext(ToastContext);

  return {
    toastProps,
  };
};

export const useToast = () => {
  const { setToastProps } = useContext(ToastContext);

  return {
    showToast: (props: DistributiveOmit<ToastProps, 'id'>) => setToastProps(props),
    closeToast: () => {
      setToastProps(undefined);
    },
  };
};
