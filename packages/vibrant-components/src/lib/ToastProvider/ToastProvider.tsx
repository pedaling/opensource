import { createContext, useContext, useEffect, useState } from 'react';
import type { Dispatch, FC } from 'react';
import type { ReactElementChild } from '@vibrant-ui/core';
import type { ToastProps } from '../Toast/ToastProps';

const DURATION = 2500;

type ToastProviderProps = {
  children: ReactElementChild;
};

const ToastPropsContext = createContext<ToastProps | undefined>(undefined);
const ToastActionContext = createContext<Dispatch<ToastProps | undefined>>(() => {});

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [toastProps, setToastProps] = useState<ToastProps | undefined>(undefined);
  const [show, setShow] = useState(false);
  //Memo(Lou): use this show variable as swipe action closing

  useEffect(() => {
    if (toastProps) {
      setShow(true);
    }

    const timer = setTimeout(() => {
      setShow(false);

      setToastProps(undefined);
    }, toastProps?.duration || DURATION);

    return () => clearTimeout(timer);
  }, [toastProps]);

  return (
    <ToastActionContext.Provider value={setToastProps}>
      <ToastPropsContext.Provider value={toastProps}>{children}</ToastPropsContext.Provider>
    </ToastActionContext.Provider>
  );
};

export const useToastProps = () => useContext(ToastPropsContext);

export const useToast = () => {
  const setToastProps = useContext(ToastActionContext);

  return {
    showToast: (props: ToastProps) => setToastProps(props),
  };
};
