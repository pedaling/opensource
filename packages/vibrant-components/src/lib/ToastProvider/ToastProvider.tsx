import { createContext, useContext, useRef, useState } from 'react';
import type { FC } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';
import type { ToastProps } from '../Toast/ToastProps';

type ToastProviderProps = {
  children: ReactElementChild;
};

type ToastWithKeyProps = ToastProps & {
  toastKey: number;
};

const ToastPropsContext = createContext<ToastWithKeyProps | undefined>(undefined);
const ToastActionContext = createContext<(props: ToastProps | undefined) => void>(() => {});

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [toastProps, setToastProps] = useState<ToastWithKeyProps | undefined>(undefined);

  const lastToastKeyRef = useRef(0);

  const setToastWithKeyProps = (props: ToastProps | undefined) => {
    lastToastKeyRef.current++;

    if (props) {
      setToastProps({ ...props, toastKey: lastToastKeyRef.current });
    } else {
      setToastProps(undefined);
    }
  };

  return (
    <ToastActionContext.Provider value={setToastWithKeyProps}>
      <ToastPropsContext.Provider value={toastProps}>{children}</ToastPropsContext.Provider>
    </ToastActionContext.Provider>
  );
};

export const useToastProps = () => useContext(ToastPropsContext);

export const useToast = () => {
  const setToastProps = useContext(ToastActionContext);

  return {
    showToast: (props: ToastProps) => setToastProps(props),
    closeToast: () => setToastProps(undefined),
  };
};
